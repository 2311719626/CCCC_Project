const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
const {
  createBlogValidator,
  getBlogsValidator,
  deleteBlogValidator,
} = require("../middlewares/validators/blog.validator");

// 注意：确保这些路由已经在 app.js 中通过 JWT 中间件保护
router.post("/", createBlogValidator, blogController.createBlog);
router.get("/", getBlogsValidator, blogController.getBlogs);
router.delete("/:blog_id", deleteBlogValidator, blogController.deleteBlog);

module.exports = router;
