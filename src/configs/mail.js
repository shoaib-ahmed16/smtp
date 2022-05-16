const nodemailer = require('nodemailer')
require('dotenv').config()
module.exports = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: `${process.env.SMTPUSER}`, // generated ethereal user
    pass: `${process.env.SMTPPASSWORD}`, // generated ethereal password
  },
})
