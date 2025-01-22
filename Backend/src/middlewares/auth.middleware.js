const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const ResponseUtil = require("../utils/response.util");

module.exports = (req, res, next) => {
  // 从请求头获取token
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json(ResponseUtil.error(401, "未提供登录令牌"));
  }

  try {
    // 验证token
    const decoded = jwt.verify(token, config.secret);

    // 将解码后的用户信息附加到请求对象
    req.user = {
      id: decoded.user_id,
    };

    next();
  } catch (err) {
    return res.status(401).json(ResponseUtil.error(401, "无效的登录令牌"));
  }
};
