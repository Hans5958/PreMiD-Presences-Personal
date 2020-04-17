@echo off

for /d %%i in (*) do call :$DoSomething "%%i"

pause
exit /B

:$DoSomething

IF NOT %1==".vscode" IF NOT %1=="@types" IF NOT %1=="# Assets" IF NOT %1=="# Base" IF NOT %1=="# Base (ESLint safe)" IF NOT %1=="node_modules" (
    echo Compiling %1...
    echo.
    title Compiling %1...
    cd %1
    tsc
    echo Copying %1...
    echo.
    title Copying %1...
    cd ..
    branch-copy-to-fork.sh %1
)

exit /B