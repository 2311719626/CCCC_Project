/**
 * app相关
 */

/* 导入 */
// 导入工具依赖
const express = require('express')
const env = require('dotenv')
const jwtConfig = require('./config/jwt.config.js')
// 导入路由
const usersRouter = require('./routes/users.route.js')
// 导入异常处理
const handle = require('./handles/global.handle.js')

/* 加载 */
// 加载配置
env.config()
const app = express()


/* 中间件 */
// 解析json数据
app.use(express.json({
    type: 'application/json'
}))
// jwt相关验证
app.use(jwtConfig.jwtVerify)
app.use(jwtConfig.jwtHandle)
app.use(function (req,res,next){
    if(req.auth){
        // 获取当前登录用户信息
        app.locals.currentUser = req.auth
    }
    next()    
})
// 全局异常处理
app.use(handle.globalErrorHandle)

// 加载路由
app.use('/api/v1/users',usersRouter)

/* 导出 */
module.exports = {
    app
}