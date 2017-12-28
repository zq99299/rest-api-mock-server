/**
 * 账户模块数据模拟
 * <pre>
 *  Version         Date            Author          Description
 * ---------------------------------------------------------------------------------------
 *  1.0.0           2017/12/28     zhuqiang        -
 * </pre>
 * @author zhuqiang
 * @version 1.0.0 2017/12/28 10:27
 * @date 2017/12/28 10:27
 * @since 1.0.0
 */

module.exports = () => {
    const data = {}
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