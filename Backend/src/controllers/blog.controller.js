const blogService = require("../services/blog.service");
const ResponseUtil = require("../utils/response.util");

exports.createBlog = async (req, res, next) => {
  try {
    const blogData = {
      ...req.body,
      user_id: req.user.id,
    };
    const data = await blogService.createBlog(blogData);
    res.json(ResponseUtil.success(data, "发布成功"));
  } catch (err) {
    next(err);
  }
};

exports.getBlogs = async (req, res, next) => {
  try {
    const data = await blogService.getBlogs(req.query);
    res.json(ResponseUtil.success(data, "获取成功"));
  } catch (err) {
    next(err);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const data = await blogService.deleteBlog(req.params.blog_id, req.user.id);
    res.json(ResponseUtil.success(data, "删除成功"));
  } catch (err) {
    next(err);
  }
};
