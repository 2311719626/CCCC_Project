const { Blog } = require("../models/blogs.model");
const { Landscape } = require("../models/landscapes.model");

/**
 * 游记服务类
 * 处理与游记相关的业务逻辑
 */
class BlogService {
  /**
   * 创建新的游记
   * @param {Object} blogData 游记数据，包含标题、内容、景点ID等信息
   * @throws {ValidationError} 当关联的景点不存在时抛出错误
   * @returns {Promise<Object>} 返回创建的游记对象
   */
  async createBlog(blogData) {
    // 验证景点是否存在
    const landscape = await Landscape.findById(blogData.landscape_id);
    if (!landscape) {
      const error = new Error("关联的景点不存在");
      error.name = "ValidationError";
      throw error;
    }

    const blog = await Blog.create(blogData);
    return blog;
  }

  /**
   * 获取游记列表
   * @param {Object} query 查询参数
   * @param {number} query.page 页码
   * @param {number} query.per_page 每页数量
   * @param {string} query.category 景点分类
   * @param {number} query.landscape_id 景点ID
   * @returns {Promise<Object>} 返回分页后的游记列表数据
   */
  async getBlogs(query) {
    const { page = 1, per_page = 10, category, landscape_id } = query;
    const skip = (page - 1) * per_page;

    let filter = {};
    if (landscape_id) {
      filter.landscape_id = landscape_id;
    }

    let aggregation = [];

    if (category) {
      aggregation.push(
        {
          $lookup: {
            from: "landscapes",
            localField: "landscape_id",
            foreignField: "_id",
            as: "landscape",
          },
        },
        {
          $match: {
            "landscape.category": category,
          },
        }
      );
    }

    aggregation.push(
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          "author.password": 0,
          "author.email": 0,
        },
      }
    );

    const total = await Blog.countDocuments(filter);
    const items = await Blog.aggregate(aggregation)
      .match(filter)
      .skip(skip)
      .limit(parseInt(per_page))
      .sort({ createdAt: -1 });

    return {
      total,
      items,
      page: parseInt(page),
      per_page: parseInt(per_page),
    };
  }

  /**
   * 删除游记
   * @param {number} blogId 游记ID
   * @param {number} userId 用户ID
   * @throws {NotFoundError} 当游记不存在或用户无权限时抛出错误
   * @returns {Promise<Object>} 返回被删除的游记ID
   */
  async deleteBlog(blogId, userId) {
    const blog = await Blog.findOne({
      _id: blogId,
      user_id: userId,
    });

    if (!blog) {
      const error = new Error("游记不存在或无权限删除");
      error.name = "NotFoundError";
      throw error;
    }

    await blog.deleteOne();
    return { blog_id: blogId };
  }
}

module.exports = new BlogService();
