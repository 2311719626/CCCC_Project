const jwt = require('express-jwt')
require('dotenv').config()

// JWT验证中间件
exports.jwtVerify = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
})

// JWT错误处理中间件
exports.jwtHandle = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      status: 401,
      msg: '无效的token',
      data: null
    })
  }
  next(err)
}

// 用户信息中间件
exports.userContext = (req, res, next) => {
  if (req.auth) {
    req.app.locals.currentUser = req.auth
  }
  next()
}
