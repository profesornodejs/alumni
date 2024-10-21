const mongoose = require('mongoose')

const StudentShema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    credential: {
        user: String,
        password: String
    },
    courses: [{type: mongoose.Types.ObjectId, ref: "courses"}]
})

const students = mongoose.model("students",StudentShema)

module.exports = students