---
category:

- 编程

tag:

- C++
- 编译器

title: C++中编译器内建支持的标准库组件
---
标准库中存在一些和编译器紧密关联的模板和函数，本文将依次列举
<!-- more -->

## type_traits

`is_union`、`is_class`等判断类的区别的，判断是否是标准布局的，判断类的构造方式的，判断是否trivial的，判断是否是虚函数的，判断是否是空类的...

## std::initializer_list

编译器看到被大括号包起来的东西，就会尝试将其转化成`initializer_list`类型，这也无法手工实现

```cpp
    auto test = {0};
    cout << boolalpha << (typeid(test) == typeid(initializer_list<int>)); //true
```

## 类型相关

如`std::type_info`

## 可以实现但效率不高的

如`std::make_index_sequence`，手动实现要实例化n个模板

## 其他

`std::is_constant_evaluated` 判断是否在编译器调用\
`std::source_location` 获取源代码位置信息\
某些带着constexpr修饰但无法手工实现的函数，如`constexpr std::address_of`