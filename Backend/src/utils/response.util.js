class ResponseUtil {
  static success(data = null, msg = "成功") {
    return {
      status: 200,
      msg,
      data,
    };
  }

  static error(status = 500, msg = "服务器错误", data = null) {
    return {
      status,
      msg,
      data,
    };
  }
}

module.exports = ResponseUtil;
