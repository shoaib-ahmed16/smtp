const app = require('./index')
const connect = require('./configs/db')

const port = 3000 || 3001 || 3002 || 3003
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
