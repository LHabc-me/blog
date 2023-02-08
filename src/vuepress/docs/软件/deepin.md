---
category:

- 软件

tag:

- Linux

title: deepin操作系统初步尝试
---
将deepin作为主力操作系统已两月有余，特写此文总结遇到的各种坑，附解决方法
<!-- more -->
首先附上系统下载链接
[deepin](https://www.deepin.org/zh/download/)

可使用`深度启动盘制作工具`制作启动盘并安装

# 1. 开机时打印引导日志

## 解决方法
打开`/boot/grub/grub.cfg`，找到
```
linux	/boot/vmlinuz-5.18.17-amd64-desktop-community-hwe root=UUID=9d7553b1-e478-411b-8952-4fc7866f13e1 ro  splash quiet DEEPIN_GFXMODE=$DEEPIN_GFXMODE
```
改为
```
linux	/boot/vmlinuz-5.18.17-amd64-desktop-community-hwe root=UUID=9d7553b1-e478-411b-8952-4fc7866f13e1 ro  splash quiet loglevel=0 DEEPIN_GFXMODE=$DEEPIN_GFXMODE
```


# 2. 使用管理员权限运行软件会打开文件夹时会出现蜂鸣声

## 解决方法
禁用相关内核模块即可
```shell
echo 'blacklist pcspkr
blacklist snd_pcsp' | sudo tee /etc/modprobe.d/blacklist-pcspkr.conf
sudo update-initramfs -u
```
::: info
重启后生效
:::


# 3. 安装百度网盘后磁盘多出一个网盘图标

## 解决方法
```shell
sudo rm /usr/share/dde-file-manager/extensions/appEntry/baidunetdiskv.desktop
```


# 4. 系统时间错误

## 解决方法
修改系统默认时区
```shell
sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
