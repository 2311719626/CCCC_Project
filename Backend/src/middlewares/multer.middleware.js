/**
 * 解析表单数据请求中间件
 */
const multer = require('multer')
const fs = require('node:fs')
const path = require('node:path')

//配置storage规则
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //创建临时上传文件目录
        const picDir = 'images'
        const uploadTmpDir = path.join(__dirname,'..','..','misc',picDir)
        if(!fs.existsSync(uploadTmpDir)){
            fs.mkdirSync(uploadTmpDir,{recursive: true})
        }
        cb(null, uploadTmpDir)
    },
    filename: function (req, file, cb) {
        //定义上传的文件名
        cb(null, `${Date.now()}_${file.originalname}`)
    }
  })

const upload = multer({ storage: storage })

module.exports = {
    upload
}
