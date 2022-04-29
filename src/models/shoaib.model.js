const mongoose = require('mongoose')

const shoaibSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: false },
    text: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Product = mongoose.model('shoaib', shoaibSchema)

module.exports = Product
