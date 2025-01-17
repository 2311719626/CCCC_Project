/**
 * app相关服务
 */

/* 导入 */
const express = require('express')
const env = require('dotenv')

/* 加载依赖相关配置 */
env.config()
const app = express()

//测试代码(开发时可删除)
app.get('/',(req,res)=>{
    res.send("Success!")
})

/* 导出 */
module.exports = {
    app
}