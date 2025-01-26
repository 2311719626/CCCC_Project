/**
 * app相关
 */

/* 导入 */
const express = require("express");
const env = require("dotenv");
const jwtConfig = require('./config/jwt.config.js'); 
// 导入路由
const usersRouter = require("./routes/users.route.js");
const blogsRouter = require("./routes/blog.route");
const poemsRouter = require("./routes/poem.route");
const landscapesRouter = require("./routes/landscapes.route");
// 导入异常处理
const handle = require("./handles/global.handle.js");
//导入日志
const {logger} = require('./utils/log.util.js')

/* 加载 */
// 加载配置
env.config();
logger.info('dotenv: loaded')
const app = express();

/* 中间件 */
// 解析json数据
app.use(
  express.json({
    type: "application/json",
  })
);
logger.info('jsonparse: loaded')
// jwt相关验证
app.use(jwtConfig.jwtVerify)
app.use(jwtConfig.jwtHandle)
logger.info('jwt: loaded')

// 加载路由
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/blogs',blogsRouter)
app.use("/api/v1/poems", poemsRouter);
app.use("/api/v1/landscapes", landscapesRouter);
logger.info('route: loaded')

// 全局异常处理
app.use(handle.globalErrorHandle)
logger.info('globalHandle: loaded')

/* 导出 */
module.exports = {
  app,
};
