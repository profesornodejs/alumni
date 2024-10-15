const express = require('express')
const studentLoginController = require('../controller/StudentLoginController')
const studentDataController = require('../controller/studentDataController')

const routerStudent = express.Router();
routerStudent.get("/student/login", studentLoginController)
routerStudent.get("/student/profile", studentDataController)

module.exports = routerStudent