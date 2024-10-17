const express = require('express')
const studentController = require('../controller/StudentController.js')

const studentMidleware = require('../midleware/StudentMidleware.js')

const routerStudent = express.Router();

routerStudent.use(studentMidleware.validateUser)

routerStudent.get("/student/login", studentController.studentLoginController)

module.exports = routerStudent