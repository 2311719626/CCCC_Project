const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const ResponseUtil = require("../utils/response.util");

module.exports = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res
      .status(401)
      .json(ResponseUtil.error(401, "未提供认证令牌", null));
  }

  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = {
      id: decoded.user_id,
    };
    next();
  } catch (err) {
    return res
      .status(401)
      .json(ResponseUtil.error(401, "无效的认证令牌", null));
  }
};
