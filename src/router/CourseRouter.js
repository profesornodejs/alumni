const express = require('express')
const courseController = require('../controller/CourseController.js')

const routerCourse = express.Router();
routerCourse.get("/course/all", courseController.getAllCourseController)
routerCourse.get("/course/student", courseController.getCourseByIdController)


module.exports = routerCourse