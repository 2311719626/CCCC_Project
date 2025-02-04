/**
 * app相关
 */

/* 导入 */
const express = require("express");
const env = require("dotenv");
const jwtConfig = require('./config/jwt.config.js'); 
const cors = require('cors')
// 导入路由
const protectedRouter = require("./routes/protected.route.js");
const usersRouter = require("./routes/users.route.js");
const blogsRouter = require("./routes/blog.route");
const poemsRouter = require("./routes/poem.route");
const landscapesRouter = require("./routes/landscapes.route");
// 导入异常处理
const handle = require("./handles/global.handle.js");
//导入日志
const {logger} = require('./utils/log.util.js');

/* 加载 */
// 加载配置
env.config();
logger.info('dotenv: loaded');
const app = express();

/* 中间件 */
// 解析json数据
app.use(
  express.json({
    type: "application/json",
  })
);
logger.info('jsonparse: loaded');
// jwt相关验证
app.use(jwtConfig.jwtVerify);
app.use(jwtConfig.jwtHandle);
logger.info('jwt: loaded');
// 加载跨域请求操作
app.use(cors())

// 加载路由
app.use('/api/v1/users',usersRouter);
app.use('/api/v1/blogs',blogsRouter);
app.use("/api/v1/poems", poemsRouter);
app.use("/api/v1/landscapes", landscapesRouter);
app.use('/protected',protectedRouter);
//未知url处理
app.get('*',async (req,res,next)=>{
  try {
    let error = new Error("资源未找到");
    error.status = 404;
    throw error;
  } catch (e) {
    next(e); 
  }
})
logger.info('route: loaded');

// 全局异常处理
app.use(handle.globalErrorHandle);
logger.info('globalHandle: loaded');

/* 导出 */
module.exports = {
  app,
};
