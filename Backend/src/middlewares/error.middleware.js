const ResponseUtil = require("../utils/response.util");

const errorHandler = (err, req, res, next) => {
  if (err.name === "NotFoundError") {
    return res.status(404).json(ResponseUtil.error(404, err.message));
  }

  return res.status(500).json(ResponseUtil.error(500, "服务器错误"));
};

module.exports = errorHandler;
