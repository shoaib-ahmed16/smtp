const nodemailer = require('nodemailer')
module.exports = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'ashoaib.722@gmail.com', // generated ethereal user
    pass: 'wyugyhxytzdmbkpe', // generated ethereal password
  },
})
