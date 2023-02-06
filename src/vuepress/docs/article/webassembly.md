---
category:

- 编程

tag:

- C++
- js
- web

title: WebAssembly初体验
date: 2023-02-07
---
使用Emscripten将C++编译到wasm，实现与js的交互
<!-- more -->

## Emscripten编译流程

emcc/em++能够将C/C++代码转换为所需要的LLVM-IR代码，
Clang/LLVM（Fastcomp）能够将生成的LLVM-IR代码转换为ASM.js及WebAssembly代码，
而emsdk用来帮助我们管理工具链内部的不同版本的子集工具及依赖关系以及相关的用户编译设置。

## 安装Emscripten SDK

```shell
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install 1.39.8
```

::: info
emsdk-1.39.8可以用于编译Qt5.15，已经过官方测试
:::

## 激活

```shell
./emsdk activate 1.39.8
source ./emsdk_env.sh
```

## 初步尝试

### 源代码

```cpp
#include <iostream>
int main(int argc, char** argv)
{
    std::cout << "'Hello World' from js" << '\n';
}
```

### 编译

```shell
em++ hello.cc -s WASM=1 -o hello.js
```

会生成hello.js和hello.wasm

### 运行

```shell
node hello.js
```

输出：'Hello World' from js

::: warning
本地运行需要安装nodejs
:::