/**
 * jwt token验证相关配置
 */
const {expressjwt: expressJwt} = require('express-jwt')
const JWT_SECRET_KEY = 'wust_cccc_2025'

// jwt token 验证
const jwtVerify = expressJwt({
    secret: JWT_SECRET_KEY,
    algorithms: ['RS256'],
    credentialsRequired: false,
    requestProperty: 'auth'
}).unless({
    path: [
        '/api/v1/users/register',
        '/api/v1/users/login'
    ]
})

// jwt验证失败处理
const jwtHandle = (err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401).send('无效token')
    }else{
        next(err)
    }
}

module.exports = {
    jwtVerify,
    jwtHandle
}