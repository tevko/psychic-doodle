#!/.bin/
echo "Sending up to Github Pages 🚀"
git checkout main
rm -rf dist
npx parcel build index.html --public-url ./ --no-cache 
git add dist 
git commit -m "update latest build"
# below command extracts dist files from main and pushes to gh-pages branch 
git push origin `git subtree split --prefix dist main`:gh-pages --force 