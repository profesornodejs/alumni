const mongoose = require('mongoose')

const ComentShema = mongoose.Schema({
    comment: String,
    student: String
})

const commentModel = mongoose.model("comments",ComentShema)

module.exports = commentModel
