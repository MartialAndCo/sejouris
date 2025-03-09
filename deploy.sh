#!/bin/bash

# Build the Next.js project
npm run build

# Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
touch out/.nojekyll

# If you're deploying to a custom domain, uncomment the following line
# echo "yourdomain.com" > out/CNAME

echo "Build completed. The 'out' directory is ready to be deployed to GitHub Pages."
echo "You can now push the 'out' directory to the gh-pages branch of your repository."

