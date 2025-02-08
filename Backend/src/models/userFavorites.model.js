/**
 * 用户收藏模型
 */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userFavoriteSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    landscape_id: {
      type: Schema.Types.ObjectId,
      ref: "Landscape",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// 创建复合索引确保用户不会重复收藏同一个景点
userFavoriteSchema.index({ user_id: 1, landscape_id: 1 }, { unique: true });

const UserFavorite = mongoose.model("UserFavorite", userFavoriteSchema);

module.exports = { UserFavorite };
