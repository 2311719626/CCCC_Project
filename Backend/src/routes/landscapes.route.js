const express = require("express");
const router = express.Router();
const landscapesController = require("../controllers/landscapes.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// 所有路由都需要token验证中间件
router.use(authMiddleware);

// 路由定义
// GET /api/v1/landscapes - 获取山水列表
router.get("/", landscapesController.getLandscapes);

// GET /api/v1/landscapes/categories - 获取山水分类
router.get("/categories", landscapesController.getCategories);

// GET /api/v1/landscapes/:landscape_id - 获取单个山水详情
router.get("/:landscape_id", landscapesController.getLandscapeById);

// POST /api/v1/landscapes/:landscape_id/favorite - 收藏山水
router.post("/:landscape_id/favorite", landscapesController.favorLandscape);

// DELETE /api/v1/landscapes/:landscape_id/favorite - 取消收藏
router.delete("/:landscape_id/favorite", landscapesController.unfavorLandscape);

module.exports = router;
