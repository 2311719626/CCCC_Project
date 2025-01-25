const mongoose = require('mongoose');
const { Schema } = mongoose;

const landscapeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['山', '水', '瀑布', '湖泊', '河流', '五岳']
  },
  description: {
    type: String,
    required: true
  },
  location: String,
  image: String,
  related_poems: [{
    title: String,
    author: String,
    content: String
  }]
}, {
  timestamps: {
    createdAt: 'created_time',
    updatedAt: 'updated_time'
  }
});

const Landscape = mongoose.model('Landscape', landscapeSchema);

module.exports = { Landscape };
