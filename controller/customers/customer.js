const connection = require('../../model/dbconnection')
const sgMail = require('@sendgrid/mail')
const schedule = require('node-schedule')
const API_KEY = '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'
sgMail.setApiKey(API_KEY)

const createSchedule = function (req, res) {
  const sqlQuery = 'SELECT * FROM schedule'
  connection.query(sqlQuery, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    } else {
      res.send(result)
      const job = schedule.scheduleJob(result[0].expression, function () {
        const msg = {
          to: result[0].emailto, // Change to your recipient
          from: 'shivikashri.72@gmail.com',
          subject: result[0].subject,
          text: 'This is employee data',
          html: result[0].html
}
        sgMail
          .send(msg)
          .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
          })
          .catch((error) => {
            console.error(error)
          })
      })
}
})
}

const updateSchedule = function (req, res) {
  const data = req.body.expression
  const emailTo = req.params.emailto
  const sqlQuery = 'update schedule set expression=? where emailto=?'
  connection.query(sqlQuery, [data, emailTo], (error, result) => {
    if (error) {
      console.log(error.sqlMessage)
    } else {
      res.send(result)
      const job = schedule.scheduleJob(result[0].expression, function () {
        const msg = {
          to: result[0].emailto,
          from: 'shivikashri.72@gmail.com',
          subject: result[0].subject,
          text: 'This is employee data',
          html: result[0].html
}
        sgMail
          .send(msg)
          .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
          })
          .catch((error) => {
            console.error(error)
          })
      })
    }
  })
}

const deleteSchedule = function (req, res) {
  const sqlQuery = 'DELETE FROM schedule where emailto=?'
  const data = req.query.emailto
  connection.query(sqlQuery, data, function (error, result) {
    console.log(result)
    if (error) {
      console.log(error)
    } else {
      res.send(result)
      const job = schedule.scheduleJob(result[0].expression, function () {
        const msg = {
          to: result[0].emailto, // Change to your recipient
          from: 'shivikashri.72@gmail.com',
          subject: result[0].subject,
          text: 'This is employee data',
          html: result[0].html
}
        sgMail
          .send(msg)
          .then((response) => {
          })
          .catch((error) => {
            console.error(error)
          })
      })
}
  })
}
module.exports = { createSchedule, updateSchedule, deleteSchedule } 
