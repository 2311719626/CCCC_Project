/**
 * 全局错误处理
 */

// 全局异常列表
const ERROR_MESSAGE = {
  USER: {
    USERNAME_OR_EMAIL_EXIST: "用户名或邮箱已存在",
    REGISTRATION_FAILED: "注册失败",
  },
};
// 异常处理类
class AppError extends Error {
  constructor(message, status) {
    if (!message) {
      throw new Error(`Invalid error message: ${message}`);
    }
    super(message);
    this.name = "AppError";
    this.status = status || 500;
  }
}

// 全局异常处理
const globalErrorHandle = (err, req, res, next) => {
  if (err instanceof AppError) {
    // 使用抛出异常时的信息和状态码
    res.status(err.status).json({
      msg: err.message,
      data: {},
    });
  } else {
    // 未知错误，直接返回服务器异常
    res.status(500).json({
      msg: "服务端错误",
      data: {},
    });
  }
};

module.exports = {
  ERROR_MESSAGE,
  AppError,
  globalErrorHandle,
};
