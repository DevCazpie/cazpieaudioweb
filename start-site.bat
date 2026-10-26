@echo off
title CAZPIE AUDIO - Portfolio
echo ==================================================
echo   Starting CAZPIE AUDIO Portfolio Website
echo ==================================================
echo.
echo Opening index.html in your default web browser...
start "" "%~dp0index.html"
echo.
echo Press any key to start a local development server (port 3000)...
pause
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 3000
