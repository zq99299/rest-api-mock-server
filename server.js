// 自定义
const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json')

// 使用js构造出来的数据作为数据源
const routerFun = require('./data/index.js');
const router = jsonServer.router(routerFun())
const middlewares = jsonServer.defaults()

// url 重写
const path = require('path')
const fs = require('fs');
const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')));
server.use(jsonServer.rewriter(routes))


// // 把所有请求都伪装成get请求，获取数据
// https://github.com/typicode/json-server/issues/453
server.use((req, res, next) => {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    if (req.method != 'GET') {
        req.method = 'GET'
    }
    req.query = {} // 该行代码可以清空查询参数，但是发现 自定义路由映射的只要带了查询参数就出错

    // 所以这里重定向到没有参数的路径
    if (req.url.includes('?')) {
        res.redirect(req.url.replace(/\?.*$/, ''))
        return
    }
    // Continue to JSON Server router
    next()
})

// 自定义包装返回结果
// 用于后端统一返回的rest结果集类型
router.render = (req, res) => {
    // console.log(res)
    res.jsonp({
        code: 200,
        msg: "业务处理成功",
        data: res.locals.data
    })
}
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running http://localhost:3000')
})