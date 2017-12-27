/**
 *
 * <pre>
 *  Version         Date            Author          Description
 * ---------------------------------------------------------------------------------------
 *  1.0.0           2017/12/27     zhuqiang        -
 * </pre>
 * @author zhuqiang
 * @version 1.0.0 2017/12/27 13:06
 * @date 2017/12/27 13:06
 * @since 1.0.0
 */
var faker = require('faker');
// console.log(faker)
faker.locale = "zh_CN";
module.exports = () => {
    const data = {users: []}
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        // 可以结合faker生成数据
        data.users.push({id: i, name: faker.name.findName(), email: faker.internet.email()})
    }
    // 也可以自己用代码写死
    data.signin = mockUserInfo();

    // 数据多的时候 还可以利用 分文件然后导入，该文件做主要的入口集成
    return data
}

function mockUserInfo() {
    let leftMenus = []
    leftMenus.push({
        type: 'item',
        lable: '欢迎页',
        icon: 'iconfont icon-home',
        route: {
            type: 'inner',
            path: '/index'
        }
    })
    leftMenus.push({
        type: 'item',
        lable: '网站外部跳转',
        icon: 'el-icon-share',
        route: {
            type: 'out',
            path: 'http://www.baidu.com'
        }
    })
    leftMenus.push({
        type: 'item',
        lable: '权限页测试',
        icon: 'el-icon-menu',
        route: {
            type: 'inner',
            path: '/auth'
        }
    })
    leftMenus.push({
        type: 'submenu',
        lable: '导航一',
        icon: 'el-icon-message',
        childs: [
            {
                type: 'item',
                lable: '选项1',
                icon: 'el-icon-message',
                route: {
                    type: 'inner',
                    path: '/auth'
                }
            },
            {
                type: 'item',
                lable: '选项2',
                icon: 'el-icon-message',
                route: {
                    type: 'inner',
                    path: '/auth'
                }
            }
        ]
    })
    leftMenus.push({
        type: 'item',
        lable: 'example',
        icon: 'iconfont icon-home',
        route: {
            type: 'inner',
            path: '/example'
        }
    })
    let userInfo = {
        user: {userName: '模拟用户'},
        menus: leftMenus
    }
    return userInfo
}