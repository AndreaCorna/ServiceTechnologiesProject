
git checkout master
git pull origin master
git checkout heroku
git merge master
sed -i.bak "s/^vendor\///g" ".gitignore"
sed -i.bak "s/^build\///g" ".gitignore"
sed -i.bak "s/^\*\.yml//g" ".gitignore"
git add .
git commit -sam "heroku push"
git push heroku heroku:master
git checkout master
echo "[--]Pulling from master to avoid conflicts"
git pull origin master

echo "[--]Pushing to  origin master "
git push origin master

echo "[--]Checking out to heroku branch"
git checkout heroku

echo "[--]Pulling   heroku branch"

git pull heroku master

echo "[--]Crossing finger and merging master"

git merge master

echo "[--]Modifiying .gitignore"

sed -i.bak "s/^vendor\///g" ".gitignore"
sed -i.bak "s/^build\///g" ".gitignore"
sed -i.bak "s/^\*\.yml//g" ".gitignore"
rm .gitignore.bak

echo "[--]Grunt Building"
grunt build
git add .
git commit -sam "heroku push"
echo "[--]Pushing to heroku"
git push heroku heroku:master

echo "[--]Returning to master branch"

git checkout master
