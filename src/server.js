const app = require('./index')
const connect = require('./configs/db')

const port =
  process.env.PORT1 ||
  process.env.PORT2 ||
  process.env.PORT3 ||
  process.env.PORT4
app.listen(port, async function () {
  await connect()
  console.log(`listening on port ${port}`)
})
