const mysql = require('mysql')

const details = {
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'email_scheduling'
}

const connection = mysql.createConnection(details)

connection.connect(function (error) {
  if (error) {
    console.log(error.sqlMessage)
  } else {
    console.log('database connected')
  }
})

module.exports = connection