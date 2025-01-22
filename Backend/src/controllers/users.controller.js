/**
 * 用户控制器
 */

const usersService = require('../services/users.service.js')

// 用户注册控制
const usersRegister = async (req,res)=>{
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
        console.log(err)
    }
}

// 用户登录控制
const usersLogin = async (req,res)=>{

}

module.exports = {
    usersRegister
}