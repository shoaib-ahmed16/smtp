const express = require('express')

const shoaibController = require('./controllers/shoaib.controllers')

const app = express()

app.use(express.json())

app.use('/email', shoaibController)

module.exports = app
