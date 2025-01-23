class ResponseUtil {
  static success(data = null, msg = "操作成功") {
    return {
      status: 200,
      msg: msg,
      data: data,
    };
  }

  static error(status = 500, msg = "操作失败", data = null) {
    return {
      status: status,
      msg: msg,
      data: data,
    };
  }
}

module.exports = ResponseUtil;
