const express = require('express')
const studentController = require('../controller/StudentController.js')

const routerStudent = express.Router();
routerStudent.get("/student/login", studentController.studentLoginController)

module.exports = routerStudent