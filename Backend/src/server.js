/**
 * 服务启动入口
 */

/*导入相关依赖*/
const { app } = require("./app.js");
const { mongodbConnection } = require("./config/db.config.js");
const { redisConnection } = require("./config/redis.config.js");
const {logger} = require('./utils/log.util.js');
 
/* 启动项目，监听3000端口 */
app.listen(process.env.PORT,process.env.IP,()=>{
    // 连接数据库
    mongodbConnection()
    // 连接redis
    //redisConnection()
    logger.info("Server start at http://"+process.env.IP+":"+process.env.PORT)
})
