/**
 * 内部路由
 */
const express = require('express')
const router = express.Router()
const protectedController = require('../controllers/protected.controller.js')
const {upload} = require('../middlewares/multer.middleware.js')
  
//内部主页
router.get('/',protectedController.getmainpage)
//登录验证页面
router.post('/login',protectedController.checklogin)
//picgo上传页面
router.get('/upload',protectedController.getuploadpage)
//picgo上传
router.post('/upload',upload.any(),protectedController.upload)

module.exports = router
