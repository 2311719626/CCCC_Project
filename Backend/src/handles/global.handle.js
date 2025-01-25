/**
 * 全局错误处理
 */

// 全局异常列表
const ERROR_MESSAGE = {
    USER: {
        USERNAME_OR_EMAIL_EXIST: '用户名或邮箱已存在',
        REGISTRATION_FAILED: '注册失败',
        LOGIN_FAILED: '登录失败',
        PASSWORD_WRONG: '密码错误',
        USER_NOT_EXIST: '用户不存在',
        USER_INFO_GET_FAILED: '用户信息获取失败',
        USER_INFO_UPDATE_FAILED: '更新失败',
        PASSWORD_UPDATE_FAILED: '密码修改失败',
        FAVORITES_GET_FAILED: '用户收藏列表获取失败',
        BLOGS_GET_FAIELD: '用户游记列表获取失败',
    }
}

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
  if (err instanceof AppError || err instanceof Error) {
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
