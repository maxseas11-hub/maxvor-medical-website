<#
.SYNOPSIS
    MAXVOR 独立站服务器空间深度排查脚本 (只查不删)
#>

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Clear-Host

Write-Host "==============================================================================" -ForegroundColor Green
Write-Host "      MAXVOR 独立站专属空间深度排查工具 (只读排查，绝对不删除任何文件)      " -ForegroundColor Green
Write-Host "==============================================================================" -ForegroundColor Green
Write-Host ""

$defaultPath = $PSScriptRoot
if (-not $defaultPath) { $defaultPath = (Get-Location).Path }

Write-Host "当前脚本所在目录: $defaultPath" -ForegroundColor Gray
$inputPath = Read-Host "请输入服务器上 MAXVOR 网站的实际目录 [直接按回车默认当前目录]"

if ([string]::IsNullOrWhiteSpace($inputPath)) {
    $target = $defaultPath.TrimEnd('\')
} else {
    $target = $inputPath.TrimEnd('\')
}

if (-not (Test-Path $target)) {
    Write-Host "`n[错误] 找不到该目录: $target，请确认路径是否正确！" -ForegroundColor Red
    Write-Host "`n按任意键退出..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

Write-Host "`n>>> 正在全面扫描 MAXVOR 目录: $target ..." -ForegroundColor Cyan
$allFiles = Get-ChildItem -Path $target -Recurse -File -Force -ErrorAction SilentlyContinue

if (-not $allFiles -or $allFiles.Count -eq 0) {
    Write-Host "`n[提示] 该目录下没有找到任何文件！" -ForegroundColor Yellow
    Write-Host "`n按任意键退出..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

$totalBytes = ($allFiles | Measure-Object -Property Length -Sum).Sum
$totalMB = [math]::Round($totalBytes / 1MB, 2)
$totalGB = [math]::Round($totalBytes / 1GB, 3)

Write-Host "------------------------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host ("MAXVOR 站点总文件数: {0} 个 | 占用总空间: {1} MB ({2} GB)" -f $allFiles.Count, $totalMB, $totalGB) -ForegroundColor Yellow
Write-Host "------------------------------------------------------------------------------" -ForegroundColor DarkGray

Write-Host "`n【一、占用空间最大的前 20 个文件清单】" -ForegroundColor Cyan
$allFiles | Sort-Object Length -Descending | 
    Select-Object -First 20 @{Name="大小(MB)";Expression={[math]::Round($_.Length/1MB, 2)}}, @{Name="相对路径";Expression={$_.FullName.Substring($target.Length)}} | 
    Format-Table -AutoSize

Write-Host "`n【二、文件类型占用空间汇总 (按后缀统计)】" -ForegroundColor Cyan
$allFiles | Group-Object Extension | ForEach-Object {
    [PSCustomObject]@{
        后缀 = if ($_.Name) { $_.Name } else { "无后缀" }
        数量 = $_.Count
        '总大小(MB)' = [math]::Round(($_.Group | Measure-Object Length -Sum).Sum / 1MB, 2)
    }
} | Sort-Object '总大小(MB)' -Descending | Select-Object -First 10 | Format-Table -AutoSize

Write-Host "`n【三、历史压缩包/备份类文件扫描】" -ForegroundColor Cyan
$archives = $allFiles | Where-Object { $_.Extension -match '^\.(zip|rar|7z|tar|gz|bak|old|tmp|msi)$' }
if ($archives -and $archives.Count -gt 0) {
    $archives | Select-Object @{Name="大小(MB)";Expression={[math]::Round($_.Length/1MB, 2)}}, @{Name="相对路径";Expression={$_.FullName.Substring($target.Length)}} | Format-Table -AutoSize
} else {
    Write-Host "  (未发现历史压缩包或临时备份文件)" -ForegroundColor Green
}

Write-Host "`n【四、核心数据与关键目录状态】" -ForegroundColor Cyan
$appData = Join-Path $target "APP-Data"
if (Test-Path $appData) {
    $appDataFiles = Get-ChildItem -Path $appData -Recurse -File -ErrorAction SilentlyContinue
    $appDataMB = if ($appDataFiles) { [math]::Round(($appDataFiles | Measure-Object Length -Sum).Sum / 1MB, 2) } else { 0 }
    Write-Host ("  [√] APP-Data/ 核心数据目录存在 (包含 {0} 个文件, 大小: {1} MB) - [受保护]" -f $appDataFiles.Count, $appDataMB) -ForegroundColor Green
} else {
    Write-Host "  [!] 未找到 APP-Data 目录" -ForegroundColor Gray
}

$webConfig = Join-Path $target "web.config"
if (Test-Path $webConfig) {
    Write-Host "  [√] web.config IIS重写配置文件存在 - [受保护]" -ForegroundColor Green
} else {
    Write-Host "  [!] 未找到 web.config" -ForegroundColor Yellow
}

Write-Host "`n==============================================================================" -ForegroundColor Green
Write-Host "  扫描已完成！您可以将上方输出的内容复制/截图发给我，我为您生成定制清理方案。" -ForegroundColor Green
Write-Host "==============================================================================" -ForegroundColor Green
Write-Host ""

Write-Host "按任意键退出窗口..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
