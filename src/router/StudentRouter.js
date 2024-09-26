const express = require('express')
const studentController = require('../controller/StudentController')

const routerStudent = express.Router();
routerStudent.get("/student", studentController)

module.exports = routerStudent