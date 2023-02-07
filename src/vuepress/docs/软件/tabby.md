---
category:

- 软件

tag:

- Terminal
- Shell

title: 使用zsh和tabby代替bash和默认终端
---
zsh提供了很多种主题和插件提高效率，tabby允许使用css美化终端
<!-- more -->
# 1. zsh
## 1. 1 安装zsh
```shell
sudo apt install zsh
```

## 1. 2 激活zsh
```shell
chsh -s /bin/bash
```

# 2. 使用oh-my-zsh美化zsh
## 1. 1 安装oh-my-zsh
```shell
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

## 1. 2 切换主题
在`~/.zshrc`中找到`ZSH_THEME="robbyrussell"`，将`robbyrussell`改为想使用的主题即可\
然后执行
```shell
source .zshrc
```

# 3. 安装tabby
[安装包链接](https://github.com/Eugeny/tabby/releases)\
下载对应的安装包并安装即可

# 4. 为tabby添加背景图片
`设置 -> 外观 -> 自定义css`
```css
body>app-root>div>div.content>tab-body.content-tab.ng-tns-c0-0.ng-star-inserted.content-tab-active.active>split-tab>terminaltab::before,
body>app-root>div>div.content>tab-body.content-tab.ng-tns-c0-0.ng-star-inserted.content-tab-active.active>split-tab>ssh-tab::before {
  content: "";
  background-image: url('这里改成你的图片路径');
  background-repeat: no-repeat;
  opacity: 0.59;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
```