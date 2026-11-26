@echo off
cd /d "%~dp0"
"%WINDIR%\Microsoft.NET\Framework64\v4.0.30319\csc.exe" /nologo /target:winexe /codepage:65001 /optimize+ /out:ClaudeTranslator.exe /r:System.Windows.Forms.dll /r:System.Drawing.dll /r:System.Core.dll ClaudeTranslator.cs
if errorlevel 1 (echo Build FAILED & exit /b 1)
echo Build OK: %~dp0ClaudeTranslator.exe
