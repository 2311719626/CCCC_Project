/**
 * redis相关配置和方法
 */

/* 导入 */
const redis = require('redis')
const {logger} = require('../utils/log.util.js')

/* redis配置，创建redis客户端 */
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

/* 连接redis */
async function redisConnection() {
    try {
        await client.connect()
        logger.info("Redis: the connection is successful")
    } catch (err) {
        logger.error("Redis:",err)
    }
}

/* 导出 */
module.exports = {
    redisConnection
}