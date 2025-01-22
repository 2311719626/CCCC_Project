/**
 * 用户收藏模型
 */

module.exports = (sequelize, Sequelize) => {
  const UserFavorite = sequelize.define(
    "user_favorite",
    {
      // 主键由user_id和landscape_id的组合构成
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      landscape_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "landscapes",
          key: "id",
        },
      },
    },
    {
      timestamps: true, // 启用时间戳
      indexes: [
        {
          // 创建联合唯一索引确保用户不会重复收藏同一个景点
          unique: true,
          fields: ["user_id", "landscape_id"],
        },
      ],
    }
  );

  return UserFavorite;
};
