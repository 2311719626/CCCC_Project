/**
 * 清理日志文件
 */
const fs = require('node:fs');
const path = require('node:path');
const schedule = require('node-schedule');
const {logger} = require('../utils/log.util.js');

// 设置日志目录
const logDirectory = path.join(__dirname,'..','..','logs');

// 定义清理任务
function cleanLogs() {
  // 获取当前时间戳
  const currentTime = Date.now();
  
  // 读取日志目录中的所有文件
  fs.readdir(logDirectory, (err, files) => {
    if (err) {
      logger.error("Task(logs): "+err.message);
      return;
    }
    
    if (files.length === 0) {
      logger.info('Task(logs): nothing to do');
      return;
    }
    
    files.forEach(file => {
      const filePath = path.join(logDirectory, file);
      
      // 获取文件的状态，检查其修改时间
      fs.stat(filePath, (err, stats) => {
        if (err) {
          logger.error('Task(logs): '+err.message);
          return;
        }
        
        // 计算文件最后修改时间和当前时间的差值
        const fileAge = currentTime - stats.mtimeMs;
        
        // 如果文件的年龄超过3天，则删除该文件
        if (fileAge > 3 * 24 * 60 * 60 * 1000) {
          fs.unlink(filePath, (err) => {
            if (err) {
              logger.error('Task(logs): '+err.message);
            } else {
              logger.info('Task(logs): '+file+' deleted');
            }
          });
        }
      });
    });
  });
}


// 定期执行清理任务
const logsCleanUpTask = ()=>{
    schedule.scheduleJob('0 0 * * 7', function() {
        // 每周天凌晨0点执行清理任务
        logger.info('Task(logs): cleanup logs')
      try {
        cleanLogs();
      } catch (err) {
        logger.error('Task(logs): '+err.message);
      }
    });
    logger.info('Task(logs): loaded');
}

module.exports = {
  logsCleanUpTask
}



