module.exports = (sequelize, Sequelize) => {
  const Landscape = sequelize.define(
    "landscape",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["山", "水", "瀑布", "湖泊", "河流", "五岳"]],
        },
      },
      images: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      altitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      visitCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: true, // 启用时间戳
      indexes: [
        {
          fields: ["category"],
        },
        {
          fields: ["name"],
        },
      ],
    }
  );

  // 模型关联定义
  Landscape.associate = (models) => {
    // 与用户收藏的多对多关系
    Landscape.belongsToMany(models.user, {
      through: "user_favorites",
      as: "favoritedBy",
      foreignKey: "landscape_id",
    });

    // 与游记的一对多关系
    Landscape.hasMany(models.blog, {
      foreignKey: "landscape_id",
      as: "blogs",
    });
  };

  return Landscape;
};
