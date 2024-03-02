# What is NPM?

1. It works as a Node Package Manager,but there is no Full Form of NPM.
2. All type of packages are hosted at NPM.

# package.json

- It is a configuration file for NPM

# Bundler

- It bundle our app,minification,compression for build, so that it can be shipped to production.

# npm install -D parcel

- the parameter(-D) before parcel is for mentioning Development dependency.
- normally nmp i parcel are used iin production(can also be used in dev)

# "parcel": "^2.11.0"(caret(^) and tilde(~))

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
  - Basically it automatically updates the changes to the server(local server)
- Caching = Faster Builds.
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browser,have different bundle for different browser.
- Hosting on https.
- Tree Shaking algorithm - remove unused file from the project.
- caret(^),this up arrow ensure upgrading of package in up to that version only.
- tilde(~),this will upgrade for newer versions as well like parcel 3.0.2.

# package-lock.json

- It locks the version and keep the exact version of dependency used.
- package.json keeps approx version of dependency used.

# in package-lock.json

node_modules/@parcel/resolver-default: {
"version": "2.11.0",
"resolved": "https://registry.npmjs.org/@parcel/resolver-default/-/resolver-default-2.11.0.tgz",
"integrity": "sha512-suZNN2lE5W48LPTwAbG7gnj1IeubkCVEm0XspWXcXUtCzglimNJ8PVVBGx171o5CqDpdbGF3AqHjG9N3uOwXag==",
"dev": true,
"dependencies": {
"@parcel/node-resolver-core": "3.2.0",
"@parcel/plugin": "2.11.0"
},
"engines": {
"node": ">= 12.0.0",
"parcel": "^2.11.0"
},

- this "integrity": "sha512-suZNN2lE5W48LPTwAbG7gnj1IeubkCVEm0XspWXcXUtCzglimNJ8PVVBGx171o5CqDpdbGF3AqHjG9N3uOwXag==",
  keep track of thing whatever i have on my machine se same as my production.

# node_module

- contain all the files of dependencies used.
- have number of files because one file may need another set of dependency and the chain come be large

- such chain of dependency is called as transitive dependency.

- If we have package.json and package-lock.json, then we can regenerate the node_modules.
- hence we don't need to put the node_modules on the production/github.

# npx

- Executing a package
- npx parcel index.html, it will execute the parcel package.
- Basically parcel will go the source (here index.html) and create a development build for our app.

# browserslist

- will take an array of browser to be supported.
- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
