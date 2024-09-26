const mongoose = require('mongoose')

const StudentShema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    username: String,
    password: String
})

const studentsModel = mongoose.model("students",StudentShema)

module.exports = studentsModel