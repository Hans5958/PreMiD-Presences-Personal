if [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; then
	while [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; do
		cd ..
	done
fi

letter_folder=${1::1}
letter_folder=${letter_folder^^}
escaped=${1/ /%20}

echo -e "PreMiD/Presences (online) version is \e[1m$(curl -s "https://raw.githubusercontent.com/PreMiD/Presences/master/websites/$letter_folder/$escaped/dist/metadata.json" | jq -r ".version")\e[0m"
echo -e "Hans5958/PreMiD-Presences (online) version is \e[1m$(curl -s "https://raw.githubusercontent.com/Hans5958/PreMiD-Presences/master/websites/$letter_folder/$escaped/dist/metadata.json" | jq -r ".version")\e[0m"
echo -e "PreMiD-Presences (local) version is \e[1m$(cat "../PreMiD-Presences/websites/$letter_folder/$1/dist/metadata.json" | jq -r ".version")\e[0m"
echo -e "Online PreMiD-Presences-Personal version is \e[1m$(curl -s "https://raw.githubusercontent.com/Hans5958/PreMiD-Presences-Personal/master/$escaped/dist/metadata.json" | jq -r ".version")\e[0m"
echo -e "Local PreMiD-Presences-Personal version is \e[1m$(cat "$1/dist/metadata.json" | jq -r ".version")\e[0m"

cd ../PreMiD-Presences
git log -3 --oneline -- "websites/$letter_folder/$1/dist/metadata.json"