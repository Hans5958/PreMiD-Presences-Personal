git config --global user.email "email5958.1@gmail.com"
git config --global user.name "Hans5958"
ver=$(sed -e 's/^"//' -e 's/"$//' <<< $(jq .version $1/dist/metadata.json))
branch=$(echo "${1,,}")-$ver
cd ../PreMiD-Presences
git checkout master
git branch -D $branch
git checkout -b $branch
git status
cd ../PreMiD-Presences-Personal
rm -r -f ../PreMiD-Presences/$1
cp -r $1 ../PreMiD-Presences/$1
cd ../PreMiD-Presences
git add --all
git commit --message "Update $1 ($ver)"