const mongoose = require('mongoose')

const CourseShema = mongoose.Schema({
    title: String,
    description: String,
    type: String
})

const coursesModel = mongoose.model("courses",CourseShema)

module.exports = coursesModel