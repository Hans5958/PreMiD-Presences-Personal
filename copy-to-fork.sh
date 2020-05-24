letter_folder=${1::1}
letter_folder=${letter_folder^^}
echo "Copying essential files to the main repository..."
cd ../PreMiD-Presences-Personal
rm -rf "../PreMiD-Presences/websites/$letter_folder/$1"
mkdir "../PreMiD-Presences/websites/$letter_folder/$1"
mkdir "../PreMiD-Presences/websites/$letter_folder/$1/dist"
cp -r "$1/presence.ts" "../PreMiD-Presences/websites/$letter_folder/$1/presence.ts"
echo '{"extends": "../../../tsconfig.json", "compilerOptions": {' > "../PreMiD-Presences/websites/$letter_folder/$1/tsconfig.json"
echo '"outDir": "./dist/"' >> "../PreMiD-Presences/websites/$letter_folder/$1/tsconfig.json"
echo '}}' >> "../PreMiD-Presences/websites/$letter_folder/$1/tsconfig.json"
cp -r "$1/dist/metadata.json" "../PreMiD-Presences/websites/$letter_folder/$1/dist/metadata.json"
cd "../PreMiD-Presences/websites/$letter_folder/$1"
# echo -e "Compiling \e[100mpresence.ts\e[0m..."
# cmd.exe /c "tsc"
# echo -e "Printing ESLint report and do the auto-fix.."
# cmd.exe /c "eslint presence.ts"
# cmd.exe /c "eslint presence.ts --fix"
echo -e "Tidying up files using Prettier..."
cmd.exe /c "prettier --write presence.ts"
cmd.exe /c "prettier --write tsconfig.json"
cmd.exe /c "prettier --write dist/metadata.json"
echo "Copying done!"


