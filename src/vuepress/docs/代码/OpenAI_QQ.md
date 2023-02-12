---
category:

- 编程

tag:

- OpenAI
- js

title: OpenAI_QQ使用方法
---
OpenAI_QQ的部署和配置方法的简要说明
<!-- more -->

[项目地址](https://github.com/LHabc-me/OpenAI_QQ)
# 1. 安装nodejs
[官网下载](https://nodejs.org/en/)

# 2. 克隆项目，安装依赖
```shell
git clone https://github.com/LHabc-me/OpenAI_QQ.git
cd OpenAI_QQ
npm install
```

# 3. 修改配置
## 1. 修改src/main.js
找到main函数中的login()函数，修改参数为机器人的QQ号和密码
:::info
密码为空则使用扫码登录
:::

## 2. 修改src/qqEventHandler.js
找到"openai_api_key"，修改为自己的OpenAI API Key\
从[此地址](https://beta.openai.com/account/api-keys)获取OpenAI API Key

# 4. 运行
```shell
node src/main.js
```

# 5. 使用
默认配置下，机器人会回复群聊中@机器人的消息和私聊消息。但您也可以通过运行时修改qqEventHandler.js中的处理函数来修改机器人的行为\
主函数会在您修改后重新加载qqEventHandler.js，无需重启程序或重新登录QQ