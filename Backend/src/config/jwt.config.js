/**
 * jwt token验证相关配置
 */
const { expressjwt: expressJwt } = require("express-jwt");
const { logger } = require("../utils/log.util.js");
const JWT_SECRET_KEY = "wust_cccc_2025";

//加载环境变量
require("dotenv").config();

// jwt token 验证
const jwtVerify = expressJwt({
  secret: process.env.JWT_SECRET_KEY || JWT_SECRET_KEY,
  algorithms: ["HS256"],
  credentialsRequired: true, // 确保没传 token 就会报 401
  requestProperty: "auth",
  getToken: (req) => {
    // 优先从 Authorization: Bearer <token> 获取
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    // 若无，则尝试从自定义头 token 获取
    if (req.headers.token) {
      return req.headers.token;
    }
    return null;
  },
}).unless({
  path: ["/api/v1/users/register", "/api/v1/users/login", "/protected/*"],
});

// jwt验证失败处理
const jwtHandle = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    logger.error("jsonwebtoken:", err);
    res.status(401).send({
      msg: "无效token",
      data: {},
    });
  } else {
    next(err);
  }
};

module.exports = {
  jwtVerify,
  jwtHandle,
};
