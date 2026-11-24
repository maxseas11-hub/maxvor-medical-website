@echo off
title MAXVOR 独立站深度排查
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0check_maxvor.ps1"
if errorlevel 1 (
    echo.
    echo 执行时遇到问题，按任意键退出...
    pause >nul
)
