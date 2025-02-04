/**
 * 内部路由
 */
const express = require('express')
const router = express.Router()
const protectedController = require('../controllers/protected.controller.js')
const {upload} = require('../middlewares/multer.middleware.js')
  
//主页
router.get('/',protectedController.getmainpage)
//picgo上传页面
router.get('/upload',protectedController.getuploadpage)
//picgo上传
router.post('/upload',upload.any(),protectedController.upload)

module.exports = router
