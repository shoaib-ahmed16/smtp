const app = require('./index')
const connect = require('./configs/db')
require('dotenv').config()
const port = process.env.PORT1 || 3002 || 3003 || 3004
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
