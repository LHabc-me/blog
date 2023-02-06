#! /bin/bash
./build.sh
zip -r ./build/dist.zip ./build/dist
scp ./build/dist.zip ubuntu@101.42.33.170:/home/ubuntu/ #使用时修改为自己的服务器地址