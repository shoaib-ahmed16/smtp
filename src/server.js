const app = require('./index')
const connect = require('./configs/db')

const port = 3000 || 5500 || 5000 || 3500
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
