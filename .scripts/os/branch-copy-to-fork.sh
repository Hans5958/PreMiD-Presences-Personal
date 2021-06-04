echo "Preparing repository branch..."
git config --global user.email "email5958.1@gmail.com"
git config --global user.name "Hans5958"
ver=$(sed -e 's/^"//' -e 's/"$//' <<< $(jq .version "$1/dist/metadata.json"))
branch=$(echo "${1,,}")-$ver
branch=${branch// /-}
cd ../PreMiD-Presences
git checkout master
git branch -D "$branch"
git checkout -b "$branch"
cd ../PreMiD-Presences-Personal
bash commit-copy-to-fork.sh "$1"