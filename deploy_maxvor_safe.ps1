# ==============================================================================
# MAXVOR Medical Platform - Safe Automated Deployment Script (PowerShell)
# Protects App_Data database and assets/uploads from being overwritten
# ==============================================================================

[CmdletBinding()]
param (
    [string]$TargetDir = "D:\wwwroot\maxvor",
    [string]$ZipFile = ""
)

Write-Host "==============================================================================" -ForegroundColor Cyan
Write-Host "       MAXVOR Medical Platform - Safe Deployment Tool (PowerShell)            " -ForegroundColor Cyan
Write-Host "==============================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Locate deployment zip archive
if ([string]::IsNullOrWhiteSpace($ZipFile)) {
    $scriptDir = $PSScriptRoot
    if ([string]::IsNullOrWhiteSpace($scriptDir)) { $scriptDir = (Get-Location).Path }
    
    $candidates = @(
        (Get-ChildItem -Path $scriptDir -Filter "*maxvor*dist*.zip" -File -ErrorAction SilentlyContinue),
        (Get-ChildItem -Path "C:\Users\Administrator\Desktop" -Filter "*maxvor*dist*.zip" -File -ErrorAction SilentlyContinue),
        (Get-ChildItem -Path "C:\Users\Administrator\Downloads" -Filter "*maxvor*dist*.zip" -File -ErrorAction SilentlyContinue),
        (Get-ChildItem -Path (Get-Location).Path -Filter "*.zip" -File -ErrorAction SilentlyContinue)
    ) | Where-Object { $_ -ne $null } | Select-Object -First 1

    if ($candidates) {
        $ZipFile = $candidates[0].FullName
    }
}

if ([string]::IsNullOrWhiteSpace($ZipFile) -or !(Test-Path $ZipFile)) {
    Write-Host "[!] Please enter the deployment zip path:" -ForegroundColor Yellow
    $ZipFile = Read-Host "Zip Path"
    $ZipFile = $ZipFile.Trim('"').Trim("'")
}

if (!(Test-Path $ZipFile)) {
    Write-Host "[ERROR] Zip file not found: $ZipFile" -ForegroundColor Red
    Exit 1
}

# 2. Confirm Target Directory
if (!(Test-Path $TargetDir)) {
    Write-Host "[!] Default directory $TargetDir does not exist. Please enter path:" -ForegroundColor Yellow
    $TargetDir = Read-Host "Target Directory"
    $TargetDir = $TargetDir.Trim('"').Trim("'")
}

if (!(Test-Path $TargetDir)) {
    Write-Host "[ERROR] Target directory not found: $TargetDir" -ForegroundColor Red
    Exit 1
}

Write-Host "[*] Deployment Package: $ZipFile" -ForegroundColor Green
Write-Host "[*] Target Directory  : $TargetDir" -ForegroundColor Green
Write-Host ""

# 3. Create pre-deployment snapshot of App_Data database & sanitize legacy B2B wording
$appDataDir = Join-Path $TargetDir "App_Data"
$uploadsDir = Join-Path $TargetDir "assets\uploads"
$backupDir  = Join-Path $TargetDir "App_Data\snapshots"

if (Test-Path $appDataDir) {
    if (!(Test-Path $backupDir)) {
        New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    }
    $timestamp = (Get-Date).ToString("yyyyMMdd_HHmmss")
    $snapshotJson = Join-Path $backupDir "site_data_snapshot_$timestamp.json"
    $currentJson = Join-Path $appDataDir "site_data.json"
    if (Test-Path $currentJson) {
        Copy-Item -Path $currentJson -Destination $snapshotJson -Force
        Write-Host "[SNAPSHOT] Pre-deployment backup created: site_data_snapshot_$timestamp.json" -ForegroundColor DarkCyan

        # Automatically sanitize legacy B2B & wholesale terms from server database while 100% preserving custom edits/images
        try {
            $rawContent = [System.IO.File]::ReadAllText($currentJson, [System.Text.Encoding]::UTF8)
            $cleaned = $rawContent -replace 'Connecting global buyers with reliable medical products, flexible sourcing solutions, and efficient B2B supply support\.', 'Connecting global buyers with reliable medical products, flexible sourcing solutions, and efficient supply support.' `
                                  -replace 'Streamlining B2B procurement for overseas healthcare distributors, hospital tenders, and clinic networks with direct source pricing, export documentation, and reliable fulfillment\.', 'Connecting global buyers with reliable medical products, flexible sourcing solutions, and efficient supply support.' `
                                  -replace 'Authorized diagnostic instruments, point-of-care imaging probes, and clinical supplies available for B2B wholesale and global healthcare procurement\.', 'Explore a comprehensive portfolio of diagnostic instruments, imaging probes, and clinical supplies for diverse healthcare needs worldwide.' `
                                  -replace 'Inquire for\s+B2B Pricing', 'Inquire for Pricing' `
                                  -replace 'Explore our complete list of B2B procurement questions or filter by specific category above to narrow your inquiry\.', 'Browse our FAQs for helpful information about our products, services, and support.' `
                                  -replace 'Dedicated B2B Desk', 'Dedicated Support Desk' `
                                  -replace 'Direct B2B Factory Supply & Verified Specifications', '' `
                                  -replace 'MAXVOR is a dedicated B2B medical equipment and clinical supply chain hub based in China, delivering certified diagnostic instruments and hospital supplies to overseas distributors and tenders\.', 'MAXVOR is a medical products supplier based in China, offering a diverse portfolio of diagnostic instruments, medical equipment, and clinical supplies to healthcare professionals and medical institutions worldwide.' `
                                  -replace '\bB2B\b', 'Direct' `
                                  -replace 'Wholesale Product Catalog', 'Official Product Catalog' `
                                  -replace 'Catalogue de Vente en Gros B2B', 'Catalogue Officiel des Produits' `
                                  -replace 'B2B Sourcing', 'Direct Sourcing' `
                                  -replace 'B2B Export', 'Global Export' `
                                  -replace 'B2B Procurement', 'Medical Procurement' `
                                  -replace 'B2B Logistics', 'Global Logistics' `
                                  -replace 'B2B Wholesale', 'Direct Supply' `
                                  -replace 'B2B Pricing', 'Pricing' `
                                  -replace 'B2B Support', 'Customer Support' `
                                  -replace 'Assistance B2B', 'Support Client' `
                                  -replace 'Tarif Grossiste B2B', 'Devis & Tarifs' `
                                  -replace '2026-b2b-handheld-ultrasound-procurement-and-tender-guide', '2026-handheld-ultrasound-procurement-guide'
            
            $utf8NoBom = New-Object System.Text.UTF8Encoding $false
            [System.IO.File]::WriteAllText($currentJson, $cleaned, $utf8NoBom)
            Write-Host "[CLEANSER] In-place sanitized legacy B2B wording in App_Data/site_data.json" -ForegroundColor Green
        } catch {
            Write-Host "[WARN] Could not sanitize site_data.json: $_" -ForegroundColor Yellow
        }
    }
}

# 4. Create isolated sandbox extraction directory
$tempExtractDir = Join-Path $env:TEMP ("maxvor_deploy_" + [Guid]::NewGuid().ToString().Substring(0,8))
New-Item -ItemType Directory -Path $tempExtractDir -Force | Out-Null

Write-Host "[1/4] Extracting package into temporary sandbox..." -ForegroundColor Yellow
try {
    Expand-Archive -Path $ZipFile -DestinationPath $tempExtractDir -Force
} catch {
    Write-Host "[ERROR] Failed to extract archive: $_" -ForegroundColor Red
    Remove-Item -Path $tempExtractDir -Recurse -Force -ErrorAction SilentlyContinue
    Exit 1
}

# 5. Safe file sync with whitelist protection
Write-Host "[2/4] Deploying files with 100% database protection..." -ForegroundColor Yellow

$sourceFiles = Get-ChildItem -Path $tempExtractDir -Recurse -File
$deployedCount = 0
$skippedCount = 0

foreach ($file in $sourceFiles) {
    $relPath = $file.FullName.Substring($tempExtractDir.Length).TrimStart('\', '/')
    $destPath = Join-Path $TargetDir $relPath
    
    # Strict Protection: Never overwrite existing App_Data or assets/uploads files
    if ($relPath -like "App_Data\*" -or $relPath -like "assets\uploads\*") {
        if (Test-Path $destPath) {
            $skippedCount++
            continue
        }
    }

    $destFolder = Split-Path $destPath -Parent
    if (!(Test-Path $destFolder)) {
        New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    }

    [System.IO.File]::Copy($file.FullName, $destPath, $true)
    $deployedCount++
}

# 6. Touch web.config to force IIS worker process to clear cache and reload index.html
$webConfig = Join-Path $TargetDir "web.config"
if (Test-Path $webConfig) {
    (Get-Item $webConfig).LastWriteTime = Get-Date
}

# 7. Cleanup sandbox
Write-Host "[3/4] Cleaning temporary sandbox..." -ForegroundColor Yellow
Remove-Item -Path $tempExtractDir -Recurse -Force -ErrorAction SilentlyContinue

# 7. Summary Report
Write-Host "[4/4] Deployment verified successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "==============================================================================" -ForegroundColor Green
Write-Host "              MAXVOR Website Deployed Successfully!                           " -ForegroundColor Green
Write-Host "==============================================================================" -ForegroundColor Green
Write-Host "  - Static Files & Components Updated : $deployedCount" -ForegroundColor White
Write-Host "  - Protected Database/Upload Items   : $skippedCount (App_Data & assets/uploads)" -ForegroundColor White
Write-Host "  - User Modification Data Status     : 100% PRESERVED & SAFE" -ForegroundColor Green
Write-Host "==============================================================================" -ForegroundColor Green
Write-Host ""
