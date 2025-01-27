/**
 * 缓存工具
 */

const {client} = require('../config/redis.config.js')
const {logger} = require('./log.util.js')

//检查缓存中间件
const checkCeche = async (req,res,next)=>{
    //请求url作为键
    const key = req.originalUrl
    const cacheData = await client.get(key)
    
    //处理数据
    if(cacheData){
        const data = JSON.parse(cacheData)
        //TODO 优化日志输出
        logger.info("Redis: "+JSON.stringify(data))
        res.status(200).json({
            msg: '缓存获取成功',
            data: {...data}
        })
    }

    //没有缓存
    logger.info("Redis: cache not found ==> "+req.originalUrl)
    next()
}

//缓存类
class Cache {
    //设置缓存
    async setCache(key,value,ttl= 3600){
        await client.set(key,JSON.stringify(value),{EX: ttl})
        logger.info('Redis:',{
            operating: 'SET',
            key: key,
            value: JSON.stringify(value),
            ttl: ttl
        })
    }
    //获取缓存
    async getCache(key){
        const cachedata = await client.get(key)
        logger.info('Redis:',{
            operating: 'GET',
            key: key,
            value: JSON.stringify(cachedata),
        })
        return cachedata?JSON.parse(cachedata):null
    }
    //删除缓存
    async deleteCache(key){
        await client.del(key)
        logger.info('Redis:',{
            operating: 'DELETE',
            key: key
        })
    }
    //清空缓存
    async clearCache(){
        await client.flushAll()
        logger.info('Redis:',{
            operating: 'CLEAN',
        })
    }
}

module.exports = {
    checkCeche,
    Cache
}