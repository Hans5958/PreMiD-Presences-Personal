echo "Preparing repository branch..."
git config --global user.email "email5958.1@gmail.com"
git config --global user.name "Hans5958"
ver=$(sed -e 's/^"//' -e 's/"$//' <<< $(jq .version $1/dist/metadata.json))
branch=$(echo "${1,,}")-$ver
cd ../PreMiD-Presences
git checkout master
git branch -D $branch
git checkout -b $branch
# git status
cd ../PreMiD-Presences-Personal
echo "Copying..."
bash copy-to-fork.sh $1
cd ../PreMiD-Presences
echo "Creating commit..."
git add "$1/*"
git commit --message "Update $1 ($ver)"
echo "All done!"