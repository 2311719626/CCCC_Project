/**
 * 用户路由
 */

const usersController = require('../controllers/users.controller.js')
const express = require('express')
const router = express.Router()

//用户注册
router.post('/register',usersController.usersRegister)



/* 导出用户路由 */
module.exports = router

