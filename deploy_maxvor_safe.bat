@echo off
title MAXVOR Website Safe Deployment Tool
color 0A

echo ==============================================================================
echo       MAXVOR Medical Platform - Safe Deployment Tool
echo ==============================================================================
echo.

set TARGET_DIR=D:\wwwroot\maxvor

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy_maxvor_safe.ps1" -TargetDir "%TARGET_DIR%"

echo.
pause
