const app = require('./index')
const connect = require('./configs/db')
require('dotenv').config()
const port = process.env.PORT || 5555
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
