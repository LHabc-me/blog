#! /bin/bash
cd ./build
zip -r ./dist.zip ./dist
scp ./dist.zip ubuntu@101.42.33.170:/home/ubuntu/ #使用时修改为自己的服务器地址