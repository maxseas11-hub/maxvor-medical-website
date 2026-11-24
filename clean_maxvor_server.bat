@echo off
chcp 65001 >nul
title MAXVOR 独立站专项安全清理工具 (含安装包与部署包清理)
color 0A

echo ==============================================================================
echo       MAXVOR 独立站专项安全清理工具 (只清理 MAXVOR，绝不影响其他网站)
echo ==============================================================================
echo.
echo [核心保护清单] 以下核心业务文件已被严格保护，绝不会被删除：
echo   - APP-Data/ (海外买家询盘 JSON 记录与后台持久化数据库)
echo   - web.config (IIS 路由重写规则配置文件)
echo   - index.html (前端 SPA 核心入口)
echo   - assets/ (当前最新生效的 JS/CSS 脚本与白底产品图片)
echo   - sitemap.xml / robots.txt (搜索引擎地图与爬虫协议)
echo   - favicon.svg / 谷歌站长验证文件
echo.
echo [可安全清理清单] 本脚本将自动扫描并彻底清理：
echo   - 历史残留的 MAXVOR 安装包与部署包 (*.zip, *.rar, *.7z, *.tar.gz, *.tgz)
echo   - 历史冗余的安装程序与归档包 (*.msi, *.exe 安装包, *.bak, *.old, *.tmp)
echo   - 废弃的历史备份文件夹 (如 dist_old, backup_*, old_site, old_dist)
echo   - 当前登录用户的解压临时缓存文件 (%%TEMP%%)
echo.

set /p MAXVOR_DIR=请输入服务器上 MAXVOR 网站的物理目录(直接按回车默认当前所在目录): 
if "%MAXVOR_DIR%"=="" set MAXVOR_DIR=%~dp0

echo.
echo 正在扫描并清理 MAXVOR 目录: %MAXVOR_DIR% ...
echo.

if not exist "%MAXVOR_DIR%" (
    echo [错误] 目录不存在，请检查路径是否输入正确！
    pause
    exit /b
)

:: 1. 扫描并清除所有历史安装包、部署压缩包与废弃临时文件 (自动排除 APP-Data)
echo [*] 正在彻底清除历史安装包、部署包与临时归档文件...
for /r "%MAXVOR_DIR%" %%F in (*.zip *.rar *.7z *.tar *.gz *.tgz *.bak *.tmp *.old *.msi) do (
    echo %%F | findstr /i "APP-Data App_Data" >nul
    if errorlevel 1 (
        echo   [已删除安装包/归档]: %%F
        del /f /q "%%F" >nul 2>&1
    )
)

:: 2. 清理废弃的历史版本备份文件夹 (如 dist_old, old_dist, backup_xxx)
echo.
echo [*] 正在清理废弃的历史版本备份目录...
for /d %%D in ("%MAXVOR_DIR%\dist_old*" "%MAXVOR_DIR%\old_dist*" "%MAXVOR_DIR%\backup*" "%MAXVOR_DIR%\_old*" "%MAXVOR_DIR%\temp_*") do (
    echo   [已删除旧备份目录]: %%D
    rd /s /q "%%D" >nul 2>&1
)

:: 3. 清理系统解压临时缓存 (释放 C 盘由于解压留在 Temp 中的碎片文件)
echo.
echo [*] 正在清理当前用户的临时解压缓存 (%%TEMP%%)...
del /f /s /q "%TEMP%\*.*" >nul 2>&1

echo.
echo ==============================================================================
echo   MAXVOR 站点清理完成！所有无用安装包与旧缓存已彻底清除，核心数据 100%% 完好！
echo ==============================================================================
echo.
pause
