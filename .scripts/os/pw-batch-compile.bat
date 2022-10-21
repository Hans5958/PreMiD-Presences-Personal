@echo off

REM cd Wikipedia & tsc & cd..
REM cd Wikidata & tsc & cd..
REM cd Wikimedia Commons & tsc & cd..
REM cd Wikinews & tsc & cd..
REM cd Wikiquote & tsc & cd..
REM cd Wikisource & tsc & cd..
REM cd Wikispecies & tsc & cd..
REM cd Wikiversity & tsc & cd..
REM cd Wikivoyage & tsc & cd..
REM cd Wiktionary & tsc & cd..
echo %1
echo %2
commit-copy-to-fork.sh "Wikipedia" "%1" "%2"
commit-copy-to-fork.sh "Wikibooks" "%1" "%2"
commit-copy-to-fork.sh "Wikidata" "%1" "%2"
commit-copy-to-fork.sh "Wikimedia Commons" "%1" "%2"
commit-copy-to-fork.sh "Wikinews" "%1" "%2"
commit-copy-to-fork.sh "Wikiquote" "%1" "%2"
commit-copy-to-fork.sh "Wikisource" "%1" "%2"
commit-copy-to-fork.sh "Wikispecies" "%1" "%2"
commit-copy-to-fork.sh "Wikiversity" "%1" "%2"
commit-copy-to-fork.sh "Wikivoyage" "%1" "%2"
commit-copy-to-fork.sh "Wiktionary" "%1" "%2"
