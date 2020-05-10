echo "Copying essential files to the main repository..."
cd ../PreMiD-Presences-Personal
rm -r -f ../PreMiD-Presences/$1
mkdir ../PreMiD-Presences/$1
mkdir ../PreMiD-Presences/$1/dist
cp -r $1/presence.ts ../PreMiD-Presences/$1/presence.ts
cp -r $1/tsconfig.json ../PreMiD-Presences/$1/tsconfig.json
cp -r $1/dist/metadata.json ../PreMiD-Presences/$1/dist/metadata.json
cd ../PreMiD-Presences/$1
echo -e "Compiling \e[100mpresence.ts\e[0m..."
cmd.exe /c "tsc"
# echo -e "Printing ESLint report and do the auto-fix.."
# cmd.exe /c "eslint preesnce.ts"
# cmd.exe /c "eslint presence.ts --fix"
echo -e "Tidying up \e[100mpresence.ts\e[0m using Prettier..."
cmd.exe /c "prettier --write presence.ts"
cmd.exe /c "prettier --write tsconfig.json"
cmd.exe /c "prettier --write dist/metadata.json"
echo "Copying done!"