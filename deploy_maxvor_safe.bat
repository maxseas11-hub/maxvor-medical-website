@echo off
chcp 65001 >nul
title MAXVOR 独立站安全智能部署工具
color 0A

echo ==============================================================================
echo       MAXVOR 独立站安全智能部署工具 (自动保护后台修改与上传数据)
echo ==============================================================================
echo.

set TARGET_DIR=D:\wwwroot\maxvor

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy_maxvor_safe.ps1" -TargetDir "%TARGET_DIR%"

echo.
pause
