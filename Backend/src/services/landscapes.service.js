const db = require("../models");
const Landscape = db.landscape;
const { Op } = require("sequelize");

class LandscapeService {
  // 通用方法：根据ID查找山水,不存在则抛出异常
  async findLandscapeOrThrow(id) {
    const landscape = await Landscape.findByPk(id);
    if (!landscape) {
      const error = new Error("山水不存在");
      error.name = "NotFoundError";
      throw error;
    }
    return landscape;
  }

  // 获取山水列表,支持分页、关键词搜索和分类筛选
  async getLandscapes(query) {
    const { page = 1, per_page = 10, keyword, category } = query;

    // 构建查询条件
    const where = {};
    if (keyword) {
      where.name = { [Op.like]: `%${keyword}%` };
    }
    if (category) {
      where.category = category;
    }

    // 执行分页查询
    const landscapes = await Landscape.findAndCountAll({
      where,
      offset: (page - 1) * per_page,
      limit: per_page,
    });

    // 返回分页结果
    return {
      total: landscapes.count,
      items: landscapes.rows,
      page: parseInt(page),
      per_page: parseInt(per_page),
    };
  }

  // 根据ID获取单个山水详情
  async getLandscapeById(id) {
    return await this.findLandscapeOrThrow(id);
  }

  // 获取所有分类列表
  async getCategories() {
    const categories = await Landscape.findAll({
      attributes: ["category"],
      group: ["category"],
    });
    return categories.map((c) => c.category);
  }

  // 收藏指定山水
  async favorLandscape(userId, landscapeId) {
    // 先检查山水是否存在
    await this.findLandscapeOrThrow(landscapeId);

    // 创建收藏记录
    await db.userFavorite.create({
      user_id: userId,
      landscape_id: landscapeId,
    });

    return { landscape_id: landscapeId };
  }

  // 取消收藏
  async unfavorLandscape(userId, landscapeId) {
    await db.userFavorite.destroy({
      where: {
        user_id: userId,
        landscape_id: landscapeId,
      },
    });

    return { landscape_id: landscapeId };
  }
}

module.exports = new LandscapeService();
