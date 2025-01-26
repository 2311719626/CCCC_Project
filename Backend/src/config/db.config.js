/**
 * mongo数据库相关配置和方法
 */

const mongoose = require("mongoose")
const {logger} = require('../utils/log.util.js')

/**
 * 连接mongoDB
 * 注意:这里可能会出现连接超时的情况，需要配置主机的DNS解析
 */
async function mongodbConnection() {
  try {
    await mongoose.connect(process.env.DB)
    logger.info("MongoDB: the connection is successful")
  } catch (err) {
    logger.error("MongoDB:",err)
  }
}

/**
 * 导出连接函数
 */
module.exports = {
  mongodbConnection
}
