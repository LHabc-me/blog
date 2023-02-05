#! /bin/bash
npm install
npm rebuild
rm -r ./docs/.vuepress/.temp
npm run docs:build