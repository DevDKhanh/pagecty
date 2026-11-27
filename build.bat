@echo off
cd /d "%~dp0"
set FW=%WINDIR%\Microsoft.NET\Framework64\v4.0.30319
"%FW%\csc.exe" /nologo /target:winexe /codepage:65001 /optimize+ /out:ClaudeTranslator.exe ^
  /r:System.Windows.Forms.dll /r:System.Drawing.dll /r:System.Core.dll ^
  /r:"%FW%\System.Web.Extensions.dll" ^
  /r:"%FW%\WPF\UIAutomationClient.dll" /r:"%FW%\WPF\UIAutomationTypes.dll" /r:"%FW%\WPF\WindowsBase.dll" ^
  ClaudeTranslator.cs WeChatAssist.cs
if errorlevel 1 (echo Build FAILED & exit /b 1)
echo Build OK: %~dp0ClaudeTranslator.exe
