const { expressjwt: expressJwt } = require("express-jwt");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET || "wust_cccc_2025";

// JWT验证中间件
exports.jwtVerify = expressJwt({
  secret: JWT_SECRET_KEY,
  algorithms: ["HS256"],
  credentialsRequired: false,
  requestProperty: "auth",
}).unless({
  path: ["/api/v1/users/register", "/api/v1/users/login"],
});

// JWT错误处理中间件
exports.jwtHandle = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      status: 401,
      msg: "无效的token",
      data: null,
    });
  }
  next(err);
};

// 用户信息中间件
exports.userContext = (req, res, next) => {
  if (req.auth) {
    req.app.locals.currentUser = req.auth;
  }
  next();
};
