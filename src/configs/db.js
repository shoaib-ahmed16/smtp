const mongoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://shoaibEid03:t7jq3nlvRHhvPqZe@cluster1.xrndg.mongodb.net/emails-Shoaib?retryWrites=true&w=majority'
  )
}
