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
const faker = require('faker');
// console.log(faker)
faker.locale = "zh_CN";

const account = require('./account');
module.exports = () => {
    const data = {users: []}
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        // 可以结合faker生成数据
        data.users.push({id: i, name: faker.name.findName(), email: faker.internet.email()})
    }
    // 引用模块数据
    Object.assign(
        data,
        account())

    // 数据多的时候 还可以利用 分文件然后导入，该文件做主要的入口集成
    return data
}