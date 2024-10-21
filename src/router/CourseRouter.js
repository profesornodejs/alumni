const express = require('express')
const courseController = require('../controller/CourseController.js')

const routerCourse = express.Router();

routerCourse.delete('/course/:id', courseController.deleteCourseByIdController)
routerCourse.get("/course",courseController.getAllCourseController)

module.exports = routerCourse