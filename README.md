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