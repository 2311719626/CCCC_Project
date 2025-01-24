/**
 * redis相关配置和方法
 */

/* 导入 */
const redis = require('redis')

/* redis配置，创建redis客户端 */
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

/* 连接redis */
async function redisConnection() {
    try {
        await client.connect()
        console.log("Redis connected...")
    } catch (err) {
        console.error("Redis error:\n",err)
    }
}

/* 导出 */
module.exports = {
    redisConnection
}