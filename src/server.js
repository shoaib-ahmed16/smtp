const app = require('./index')
require('dotenv').config()
const connect = require('./configs/db')

const host = '0.0.0.0'
const port = process.env.PORT || 5001
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
