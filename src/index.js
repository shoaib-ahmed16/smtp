const express = require('express')

const shoaibController = require('./controllers/shoaib.controllers')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/email', shoaibController)

module.exports = app
