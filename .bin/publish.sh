#!/.bin/
echo "Sending up to Github Pages 🚀" 
rm -rf dist
npx parcel build index.html --public-url ./ --no-cache 
git add dist 
git commit -m "update latest build" 
git push origin `git subtree split --prefix dist master`:gh-pages --force 