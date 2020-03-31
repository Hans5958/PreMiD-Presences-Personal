@echo off

for /d %%i in (*) do call :$DoSomething "%%i"

pause
exit /B

:$DoSomething

IF NOT %1==".vscode" IF NOT %1=="@types" IF NOT %1=="# Assets" IF NOT %1=="# Base" (
    cd %1
    tsc
    cd ..
    copy-to-fork.sh %1
)

exit /B