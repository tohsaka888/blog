无论是通过字面量还是通过 `new` 进行构造函数调用创建出来的对象，其实都一样。调用 `new` 的过程如下：

1. 首先创建一个对象
1. 将对象的原型绑定为构造函数 （构造函数作为对象的原型）
1. 绑定this到这个对象上
1. 返回新对象