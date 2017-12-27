# 模拟假数据并提供服务

* 使用 [json-server](https://github.com/typicode/json-server) 作为服务
* 使用 [faker](https://github.com/Marak/faker.js) 作为数据模拟库，可以更换为任意的框架，只是用来生成随机数据的

## 文件说明

* server.js 服务主要逻辑
* routes.json url 重写映射
* index.js js数据生成

## 运行
```
npm install
npm run server

```

然后打开： http://localhost:3000 查看


## 问题

貌似这个是严格按照rest来做的，post 和put 会修改原始数据。所以在模拟一些查询操作的时候就会出问题，

比如：登录操作，你需要用post请求提交用户名和密码，但是这个就会把提交的当成修改内容把原始数据替换掉。

再比如：你用post条件查询，会把你提交的条件当成数据提交修改。

所以：这个东西，我感觉还是有点鸡肋。模拟数据只是需要一些数据而已。有可能是我自己不太会用这个东西吧。