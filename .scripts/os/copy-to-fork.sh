if [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; then
	while [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; do
		cd ..
	done
fi

letter_folder=${1::1}
letter_folder=${letter_folder^^}

echo "Copying essential files to the main repository..."
cd ../PreMiD-Presences-Personal
rm -rf "../PreMiD-Presences/websites/$letter_folder/$1"
mkdir "../PreMiD-Presences/websites/$letter_folder/$1"
mkdir "../PreMiD-Presences/websites/$letter_folder/$1/dist"
cp -r "$1/presence.ts" "../PreMiD-Presences/websites/$letter_folder/$1/presence.ts"
echo '{"extends": "../../../tsconfig.json", "compilerOptions": {' > "../PreMiD-Presences/websites/$letter_folder/$1/tsconfig.json"
echo '"outDir": "./dist/"}}' >> "../PreMiD-Presences/websites/$letter_folder/$1/tsconfig.json"
cp -r "$1/dist/metadata.json" "../PreMiD-Presences/websites/$letter_folder/$1/dist/metadata.json"
cd "../PreMiD-Presences/websites/$letter_folder/$1"

# echo -e "Updating dependencies..."
# cmd.exe /c "npm install"

echo -e "Sorting metadata via the TS script..."
cp -r "../../../../PreMiD-Presences-Personal/.scripts/node/metadataSorter.ts" "metadataSorter.ts"
cmd.exe /c "npx ts-node metadataSorter.ts"
rm -rf "metadataSorter.ts"

echo -e "Tidying up files using Prettier..."
cmd.exe /c "npx prettier --write tsconfig.json"
cmd.exe /c "npx prettier --write dist/metadata.json"
cmd.exe /c "npx prettier --write presence.ts"

echo -e "Fixing errors/warnings automatically using ESLint..."
cmd.exe /c "npx eslint --fix presence.ts"

echo -e "Tidying up files using Prettier..."
cmd.exe /c "npx prettier --write tsconfig.json"
cmd.exe /c "npx prettier --write dist/metadata.json"
cmd.exe /c "npx prettier --write presence.ts"

echo -e "Fixing errors/warnings automatically using ESLint..."
cmd.exe /c "npx eslint --fix presence.ts"

# echo -e "Format again using Prettier via the TS script..."
# cp -r "../../../../PreMiD-Presences-Personal/.scripts/node/syntaxEnforcer.ts" "syntaxEnforcer.ts"
# cmd.exe /c "npx ts-node syntaxEnforcer.ts"
# rm -rf "syntaxEnforcer.ts"

# echo -e "Fixing using ESLint again..."
# cmd.exe /c "npx eslint --fix ."
# cmd.exe /c "npx eslint ."

echo -e "Tidying up files using Prettier..."
cmd.exe /c "npx prettier --write tsconfig.json"
cmd.exe /c "npx prettier --write dist/metadata.json"
cmd.exe /c "npx prettier --write presence.ts"

echo -e "Compiling \e[100mpresence.ts\e[0m for testing purposes..."
cmd.exe /c "npx tsc --build tsconfig.json"
rm -rf dist/presence.js

echo "Copying done!"
