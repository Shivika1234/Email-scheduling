const express = require('express')
const customerRoute = express.Router()
const { createSchedule, updateSchedule, deleteSchedule } = require('../../controller/customers/customer')
customerRoute.get('/api/schedule', createSchedule)
customerRoute.put('/api/updateschedule/:emailto', updateSchedule)
customerRoute.delete('/api/deleteschedule', deleteSchedule)
module.exports = customerRoute 