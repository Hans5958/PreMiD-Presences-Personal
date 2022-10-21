if [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; then
	while [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; do
		cd ..
	done
fi

letter_folder=${1::1}
letter_folder=${letter_folder^^}
echo "Preparing repository branch..."
ver=$(sed -e 's/^"//' -e 's/"$//' <<< $(jq .version "$1/dist/metadata.json"))
cd ../PreMiD-Presences
cd ../PreMiD-Presences-Personal
echo "Copying..."
bash .scripts/os/copy-to-fork.sh "$1"
cd ../PreMiD-Presences
echo "Creating commit..."
git add "websites/$letter_folder/$1/*"
if [[ $2 == "" ]]; then
	if [[ $ver == "1.0.0" ]]; then 
		echo "feat($1): add presence (1.0.0)" > temp-message
	else
		echo "feat($1): update presence ($ver)" > temp-message
	fi
else
	echo "feat($1): $2 ($ver)" > temp-message
fi
echo "" >> temp-message
printf "$3" >> temp-message
cmd.exe /c "git commit --all -F temp-message"
rm -rf temp-commit.bat
rm -rf temp-message
echo "All done!"