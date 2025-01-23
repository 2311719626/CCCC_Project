module.exports = (sequelize, Sequelize) => {
  /**
   * 游记模型
   * 定义游记在数据库中的结构及关联关系
   */
  const Blog = sequelize.define(
    "blog",
    {
      // ID字段，主键，自增
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // 游记标题
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      // 游记摘要
      summary: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      // 游记内容
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // 作者ID，关联用户表
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 景点ID，关联景点表
      landscape_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true, // 使用时间戳字段
    }
  );

  /**
   * 定义模型关联关系
   * @param {Object} models 所有模型的集合
   */
  Blog.associate = (models) => {
    Blog.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "author",
    });
    Blog.belongsTo(models.landscape, {
      foreignKey: "landscape_id",
      as: "landscape",
    });
  };

  return Blog;
};
