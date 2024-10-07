const mongoose = require('mongoose')

const CourseShema = mongoose.Schema({
    title: String,
    init: String
})

const coursesModel = mongoose.model("courses",CourseShema)

module.exports = coursesModel