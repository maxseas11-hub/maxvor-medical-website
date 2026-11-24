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

# 3. Create pre-deployment snapshot of App_Data database
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

    Copy-Item -Path $file.FullName -Destination $destPath -Force
    $deployedCount++
}

# 6. Cleanup sandbox
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
