/**
 * jwt token验证相关配置
 */
const {expressjwt: expressJwt} = require('express-jwt')
const {logger} = require('../utils/log.util.js')
const JWT_SECRET_KEY='wust_cccc_2025'

// jwt token 验证
const jwtVerify = expressJwt({
    secret: process.env.JWT_SECRET_KEY || JWT_SECRET_KEY,
    algorithms: ['HS256'],
    credentialsRequired: false,
    requestProperty: 'auth',
    getToken: (req)=>{
        if(req.headers.token){
            return req.headers.token
        }
        return null
    }
}).unless({
    path: [
        '/api/v1/users/register',
        '/api/v1/users/login'
    ]
})

// jwt验证失败处理
const jwtHandle = (err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        logger.error("jsonwebtoken:",err)
        res.status(401).send({
            msg: '无效token',
            data: {}
        })
    }else{
        next(err)
    }
}

module.exports = {
    jwtVerify,
    jwtHandle
}