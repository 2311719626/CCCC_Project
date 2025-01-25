/**
 * 用户控制器
 */

const handle = require('../handles/global.handle.js')
const usersService = require('../services/users.service.js')
const jwt = require('jsonwebtoken')

/* 用户注册控制 */
const usersRegister = async (req,res,next)=>{
    try {
        console.log("用户注册: " + JSON.stringify(req.body))
        const {username,password,email} = req.body
        const result =await usersService.usersRegister({
            username: username,
            password: password,
            email: email
        })
        if(result){
            res.status(200).json({
                msg: '注册成功',
                data: {}
            })
        }
    } catch (err) {
        next(err)
    }
}

/* 用户登录控制 */
const usersLogin = async (req,res,next)=>{
    try {
        console.log("用户登录: "+ JSON.stringify(req.body))
        const {username,password} = req.body
        const result = await usersService.usersLogin({
            username: username,
            password: password,
        })
        if(result){
            // 创建 jwt token
            const payload = {
                username: result.username,
                email: result.email
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
                algorithm: 'HS256',
                expiresIn: '1h',
                //issuer: 'CCCC',
                //audience: 'https://{ip}',
            })
            res.status(200).json({
                msg: '登录成功',
                data: {
                    token: token
                }
            })
        }
    } catch (err) {
        next(err)
    }
}

/* 获取用户信息 */
const userInfo = async (req,res,next)=>{
    try{
        console.log("用户负载信息: "+ JSON.stringify(req.auth))
        const {username,email} = req.auth
        const result = await usersService.userInfo({
            username: username,
            email: email
        })
        if(result){
            res.status(200).json({
                msg: '获取成功',
                data: result
            })
        }
    }catch(err){
        next(err)
    }
}

/* 更新用户信息 */
const userInfoUpdate = async (req,res,next)=>{
    try {
        console.log("用户更新信息: "+ JSON.stringify(req.body))
        const updateinfo = {
            oldname: req.auth.username,
            oldemail: req.auth.email,
            username: req.body.username,
            email: req.body.email,
            avatar: req.body.avatar,
            bio: req.body.bio
        }
        const result = await usersService.userInfoUpdate(updateinfo)
        if(result){
            res.status(200).json({
                msg: '更新成功',
                data: result
            })
        }
    } catch (err) {
        next(err)
    }
}

/* 修改用户密码 */
const userUpdatePassword = async (req,res,next)=>{
    try {
        console.log("修改用户密码:"+ JSON.stringify(req.body))
        const updatepassword = {
            old_password: req.body.old_password,
            new_password: req.body.new_password
        }
        const updateuser = {
            username: req.auth.username,
            email: req.auth.email
        }
        const result = await usersService.userUpdatePassword(updatepassword,updateuser)
        if(result){
            res.status(200).json({
                msg: '密码修改成功',
                data: {}
            })
        }else{
            throw new handle.AppError(handle.ERROR_MESSAGE.USER.PASSWORD_WRONG,400)
        }
    } catch (err) {
        next(err)
    }
}

//获取用户收藏列表
const userFavorites = async (req,res,next)=>{
    try {
        console.log("获取当前用户收藏列表: "+ JSON.stringify(req.auth))
        const result = await usersService.userFavorites(req.auth)
        if(result){
            res.status(200).json({
                msg: '收藏列表获取成功',
                data: result
            })
        }
    } catch (err) {
        next(err)
    }
}

//获取用户游记列表
const userBlogs = async (req,res,next)=>{
    try {
        console.log("获取当前用户游记列表: "+ JSON.stringify(req.auth))
        const result = await usersService.userBlogs(req.auth)
        if(result){
            res.status(200).json({
                msg: '游记列表获取成功',
                data: result
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    usersRegister,
    usersLogin,
    userInfo,
    userInfoUpdate,
    userUpdatePassword,
    userFavorites,
    userBlogs
}