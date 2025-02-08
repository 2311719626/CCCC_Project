/**
 * 用户路由
 */

const usersController = require('../controllers/users.controller.js')
const express = require('express')
const router = express.Router()

//用户注册
router.post('/register',usersController.usersRegister)

//用户登录
router.post('/login',usersController.usersLogin)

//获取用户详细信息
router.get('/me',usersController.userInfo)

//更新用户信息
router.patch('/me',usersController.userInfoUpdate)

//修改用户密码
router.post('/me/password',usersController.userUpdatePassword)

//获取用户收藏列表
router.get('/me/favorites',usersController.userFavorites)

//获取用户游记列表
router.get('me/blogs',usersController.userBlogs)

/* 导出用户路由 */
module.exports = router

