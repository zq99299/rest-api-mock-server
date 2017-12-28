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


// // 把所有请求都伪装成get请求，获取数据
// https://github.com/typicode/json-server/issues/453
server.use((req, res, next) => {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    if (req.method != 'GET') {
        req.method = 'GET'
        // 这句话不能要，否则报错。暂时不知道是什么原因，
        // 貌似把所有请求都伪装成get，其实在业务上来说已经抛弃了json-server提供的其他功能
        // 只是把这个作为数据源返回
        // req.query = req.body

    }
    // Continue to JSON Server router
    next()
})

// 自定义包装返回结果
// 用于后端统一返回的rest结果集类型
router.render = (req, res) => {
    console.log(res)
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