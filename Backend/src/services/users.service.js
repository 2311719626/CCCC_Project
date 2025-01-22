/**
 * 用户服务
 */

const {User} = require('../models/users.model.js')
const handle = require('../handles/global.handle.js')

/* 用户注册服务 */
exports.usersRegister = async (user)=>{
    try{
        // 查找是否存在重复注册数据
        const existuser = await User.findOne({
            username: user.username,
            email: user.email
        })
        if(existuser){
            throw new handle.AppError(handle.ERROR_MESSAGE.USER.USERNAME_OR_EMAIL_EXIST,400)
        }
        //注册成功，保存新用户信息
        const registeduser = await User.create(user)
        return registeduser
    } catch(err){
        throw new handle.AppError(handle.ERROR_MESSAGE.USER.REGISTRATION_FAILED,500)
    }
    
}