// 自定义
const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json')

// 使用js构造出来的数据作为数据源
const routerFun = require('./index.js');
const router = jsonServer.router(routerFun())
const middlewares = jsonServer.defaults()

// url 重写
const path = require('path')
const fs = require('fs');
const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')));
server.use(jsonServer.rewriter(routes))

// 自定义包装返回结果
// 用于后端统一返回的rest结果集类型
router.render = (req, res) => {
    res.jsonp({
        code: 200,
        msg: "业务处理成功",
        data: res.locals.data
    })
}

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})