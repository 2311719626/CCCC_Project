const poemService = require("../services/poem.service");
const ResponseUtil = require("../utils/response.util");

exports.getPoems = async (req, res, next) => {
  try {
    const data = await poemService.getPoems();
    res.json(ResponseUtil.success(data, "获取成功"));
  } catch (err) {
    next(err);
  }
};
