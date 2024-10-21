const mongoose = require('mongoose')

const courseShema = mongoose.Schema({
    title: String,
    description: String,
    type: String
})

const courses = mongoose.model("courses",courseShema)

module.exports = courses