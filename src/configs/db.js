const mongoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster1.xrndg.mongodb.net/emails-Shoaib?retryWrites=true&w=majority`
  )
}
