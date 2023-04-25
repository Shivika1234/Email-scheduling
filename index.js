const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const customerRoute = require('./routes/customerRoute/customerRoute')
app.use('/schedule', customerRoute)

const port = 5000
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})