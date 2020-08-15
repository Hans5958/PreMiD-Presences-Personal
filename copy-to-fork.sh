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
echo -e "Tidying up files using Prettier..."
cmd.exe /c "prettier --write presence.ts"
cmd.exe /c "prettier --write tsconfig.json"
cmd.exe /c "prettier --write dist/metadata.json"
echo -e "Fixing errors/warnings automatically using ESLint..."
cmd.exe /c "eslint presence.ts --fix"
echo -e "Printing ESLint report..."
cmd.exe /c "eslint presence.ts"
echo -e "Compiling \e[100mpresence.ts\e[0m for testing purposes..."
cmd.exe /c "tsc --build tsconfig.json"
echo -e "Removing \e[100mdist/presence.js\e[0m..."
rm -rf dist/presence.js
echo "Copying done!"


