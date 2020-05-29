letter_folder=${1::1}
letter_folder=${letter_folder^^}
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
git add "websites/$letter_folder/$1/*"
if [[ $ver == "1.0.0" ]]; then 
    git commit --message "Add $1 (1.0.0)"
else
    git commit --message "Update $1 ($ver)"
fi
echo "All done!"