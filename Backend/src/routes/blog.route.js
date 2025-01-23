const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createBlogValidator,
  getBlogsValidator,
  deleteBlogValidator,
} = require("../middlewares/validators/blog.validator");

router.use(authMiddleware);

router.post("/", createBlogValidator, blogController.createBlog);
router.get("/", getBlogsValidator, blogController.getBlogs);
router.delete("/:blog_id", deleteBlogValidator, blogController.deleteBlog);

module.exports = router;
