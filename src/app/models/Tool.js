const mongoose = require('mongoose')

const ToolShema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
    }
  ]
}, {
  toJSON: {
    transform: (doc, ret) => {
      const tool = ret;
      delete tool.__v;
      return tool;
    },
  },
})

module.exports = mongoose.model("Tool", ToolShema)
