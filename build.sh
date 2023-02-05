#! /bin/bash
rm -r ./build/

basepath=$(cd `dirname $0`; pwd);
dir=(
    $basepath/src/vuepress
    $basepath/src/pages/reaction_test
    $basepath/src/pages/gobang
);

for i in ${dir[@]}; do
  cd $i
  echo "running $i/build.sh"
  ./build.sh
done