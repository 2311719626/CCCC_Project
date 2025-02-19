const mongoose = require("mongoose");
const { Schema } = mongoose;

const landscapeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["山", "水", "瀑布", "湖泊", "河流", "五岳"],
    },
    description: {
      type: String,
      required: false,
    },
    location: String,
    image: [String],
    related_poems: {
      type: [
        {
          title: String,
          author: String,
          content: String,
          _id: false, // 禁用子文档的 _id
        },
      ],
      default: [],
      get: function (data) {
        // 确保返回的是对象数组
        if (typeof data === "string") {
          try {
            return JSON.parse(data);
          } catch (e) {
            return [];
          }
        }
        return data;
      },
    },
  },
  {
    timestamps: {
      createdAt: "created_time",
      updatedAt: "updated_time",
    },
    toJSON: { getters: true }, // 确保 getter 在 JSON 序列化时生效
    toObject: { getters: true },
  }
);

const Landscape = mongoose.model("Landscape", landscapeSchema);

module.exports = { Landscape };
