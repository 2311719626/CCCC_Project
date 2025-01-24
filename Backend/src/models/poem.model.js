module.exports = (sequelize, Sequelize) => {
  /**
   * 古诗词模型
   * 定义古诗词在数据库中的结构
   */
  const Poem = sequelize.define(
    "poem",
    {
      // ID字段，主键，自增
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // 诗词标题
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 诗词内容
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // 作者
      author: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      // 朝代
      dynasty: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false, // 不使用时间戳字段
    }
  );

  return Poem;
};
