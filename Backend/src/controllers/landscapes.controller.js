const landscapeService = require("../services/landscapes.service");
const ResponseUtil = require("../utils/response.util");

// 获取山水列表,支持分页、关键词搜索和分类筛选
exports.getLandscapes = async (req, res, next) => {
  try {
    const data = await landscapeService.getLandscapes(req.query);
    res.json(ResponseUtil.success(data, "获取成功"));
  } catch (err) {
    next(err);
  }
};

// 根据ID获取单个山水详情
exports.getLandscapeById = async (req, res, next) => {
  try {
    const data = await landscapeService.getLandscapeById(
      req.params.landscape_id
    );
    res.json(ResponseUtil.success(data, "获取成功"));
  } catch (err) {
    next(err);
  }
};

// 获取所有山水分类列表
exports.getCategories = async (req, res, next) => {
  try {
    const data = await landscapeService.getCategories();
    res.json(ResponseUtil.success(data, "获取成功"));
  } catch (err) {
    next(err);
  }
};

// 收藏指定山水
exports.favorLandscape = async (req, res, next) => {
  try {
    const data = await landscapeService.favorLandscape(
      req.user.id,
      req.params.landscape_id
    );
    res.json(ResponseUtil.success(data, "收藏成功"));
  } catch (err) {
    next(err);
  }
};

// 取消收藏指定山水
exports.unfavorLandscape = async (req, res, next) => {
  try {
    const data = await landscapeService.unfavorLandscape(
      req.user.id,
      req.params.landscape_id
    );
    res.json(ResponseUtil.success(data, "取消收藏成功"));
  } catch (err) {
    next(err);
  }
};
