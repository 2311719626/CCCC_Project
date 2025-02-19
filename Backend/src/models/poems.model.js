const mongoose = require("mongoose");
const { Schema } = mongoose;

const poemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  dynasty: String,
  content: {
    type: [String], // 修改为字符串数组类型
    required: true,
  },
  landscapes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Landscape",
    },
  ],
});

const Poem = mongoose.model("Poem", poemSchema);

module.exports = { Poem };
