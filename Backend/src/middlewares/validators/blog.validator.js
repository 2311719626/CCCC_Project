const { body, query, param } = require('express-validator');
const { validateResult } = require('./common');

const createBlogValidator = [
  body('title').notEmpty().withMessage('博客标题不能为空')
    .isLength({ max: 100 }).withMessage('标题长度不能超过100个字符'),
  body('content').notEmpty().withMessage('博客内容不能为空'),
  validateResult
];

const getBlogsValidator = [
  query('page').optional().isInt({ min: 1 }).withMessage('页码必须为正整数'),
  query('limit').optional().isInt({ min: 1 }).withMessage('每页条数必须为正整数'),
  validateResult
];

const deleteBlogValidator = [
  param('blog_id').notEmpty().withMessage('博客ID不能为空')
    .isMongoId().withMessage('无效的博客ID格式'),
  validateResult
];

module.exports = {
  createBlogValidator,
  getBlogsValidator,
  deleteBlogValidator
};
