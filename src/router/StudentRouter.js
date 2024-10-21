const express = require('express')
const studentController = require('../controller/StudentController.js')

const middlewareApp = require('../midleware/StudentMidleware.js')

const routerStudent = express.Router();

routerStudent.get("/student/login", studentController.studentLoginController)

routerStudent.get('/student/:id', studentController.getStudentByIdController)
routerStudent.put('/student/:id', studentController.addCourseStudentController)

routerStudent.post("/student",middlewareApp.validateUserAge,studentController.createStudentController)

module.exports = routerStudent