const path = require('path')
require('dotenv').config()
const express = require('express')

const transporter = require('../configs/mail')

const Shoaib = require('../models/shoaib.model')

// const { body, validationResult } = require('express-validator')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const page = req.query.page || 1
    const pagesize = req.query.pagesize || 10

    const skip = (page - 1) * pagesize

    const shoaib = await Shoaib.find()
      .skip(skip) // 30
      .limit(pagesize) // 31 - 60
      .lean()
      .exec()

    const totalPages = Math.ceil(
      (await Shoaib.find().countDocuments()) / pagesize
    )

    return res.status(200).send({ shoaib, totalPages })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const shoaib = await Shoaib.create(req.body)

    transporter.sendMail({
      from: shoaib.email,
      to: 'sahmed094@gmail.com',
      subject: shoaib.subject,
      text: `From:${shoaib.name},Email: ${shoaib.email},Text For Me: ${shoaib.text}`,
    })
    return res.status(201).send({ message: 'Email is Recieve By Shoaib Ahmed' })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const shoaib = await Product.find()

    return res.status(201).send(shoaib)
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const shoaib = await Shoaib.findById(req.params.id).lean().exec()

    return res.status(201).send(shoaib)
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const shoaib = await Shoaib.findByIdAndDelete(req.params.id)

    return res.status(201).send(shoaib)
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})

module.exports = router
