const express = require('express')
const courseController = require('../controller/CourseController.js')

const routerCourse = express.Router();
routerCourse.get("/course", courseController)

module.exports = routerCourse