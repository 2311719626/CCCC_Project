const { mongodbConnection } = require("../config/db.config");
const { User } = require("./users.model");
const { Landscape } = require("./landscapes.model");
const { Blog } = require("./blogs.model");
const { Poem } = require("./poems.model");
const { UserFavorite } = require("./userFavorites.model");

// 导出所有模型和数据库连接函数
module.exports = {
  mongodbConnection, // 使用配置文件中的数据库连接函数
  User,
  Landscape,
  Blog,
  Poem,
  UserFavorite,
};
