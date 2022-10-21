if [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; then
	while [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; do
		cd ..
	done
fi

echo "Preparing repository branch..."
ver=$(sed -e 's/^"//' -e 's/"$//' <<< $(jq .version "$1/dist/metadata.json"))
branch=$(echo "${1,,}")-$ver
branch=${branch// /-}
cd ../PreMiD-Presences
# git checkout master
git checkout -b "$branch"
git checkout "$branch"
git reset master --hard
cd ../PreMiD-Presences-Personal
bash .scripts/os/commit-copy-to-fork.sh "$1" "$2"