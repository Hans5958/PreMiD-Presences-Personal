
@echo off

@REM for /d %%i in (*) do call :$DoSomething "%%i"

call :$DoSomething DeviantArt
call :$DoSomething Fandom
call :$DoSomething Gamepedia
call :$DoSomething GeoGuessr
call :$DoSomething ManiaExchange
call :$DoSomething Outline
call :$DoSomething "TrackMania Exchange"
call :$DoSomething Typeracer
call :$DoSomething Wikiwand

pause
exit /B

:$DoSomething

IF NOT %1==".vscode" IF NOT %1=="@types" IF NOT %1=="^^ Docs" IF NOT %1=="# Assets" IF NOT %1=="^^ Base" IF NOT %1=="^^ Base (ESLint safe)" IF NOT %1=="node_modules" (
    echo Copying %1...
    commit-copy-to-fork.sh %1
)

exit /B