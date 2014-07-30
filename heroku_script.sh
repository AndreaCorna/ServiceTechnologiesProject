
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
