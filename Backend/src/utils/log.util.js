/**
 * 日志处理
 */

const fs = require('node:fs')
const path = require('node:path')
const winston = require('winston')


//检查日志文件目录是否存在
const checkDir = () =>{
    //日志文件目录
    const logDirectory = path.join(__dirname,'..','..','logs')
    if(!fs.existsSync(logDirectory)){
        //不存在创建日志文件目录
        fs.mkdirSync(logDirectory,{recursive: true})
    }
}

//日志工具配置
const logger = winston.createLogger({
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        verbose: 3,
        debug: 4,
        silly: 5
    },
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), //时间戳
        winston.format.colorize(), //控制台颜色输出
        winston.format.printf(({timestamp,level,message})=>{
            return `(${timestamp}) [${level}]: ${message}` //日志输出格式
        }) 
    ),
    exitOnError: true,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(__dirname,'..','..','logs','server.log'
        )})
    ]
})

//处理异常
logger.exceptions.handle(
    new winston.transports.Console({format: winston.format.json()}),
    new winston.transports.File({filename: path.join(__dirname,'..','..','logs','exceptions.log')})
)

//处理promise
logger.rejections.handle(
    new winston.transports.Console({format: winston.format.json()}),
    new winston.transports.File({filename: path.join(__dirname,'..','..','logs','rejections.log')})
)

//导出方法
module.exports = {
    logger,
}