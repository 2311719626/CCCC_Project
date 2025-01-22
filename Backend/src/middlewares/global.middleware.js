const ResponseUtil = require("../utils/response.util");

// 全局错误处理中间件
exports.globalErrorHandler = (err, req, res, next) => {
  console.error("Global Error:", err);
  res.status(500).json(ResponseUtil.error(500, "服务器内部错误"));
};

// JSON解析中间件
exports.jsonParser = (req, res, next) => {
  express.json({
    type: "application/json",
  })(req, res, next);
};
