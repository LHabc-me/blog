#! /bin/bash
rm -r ./docs/.vuepress/.temp
npm install
npm rebuild
npm run docs:build