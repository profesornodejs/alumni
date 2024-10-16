const routerStudent = require('./router/StudentRouter')
const routerCourse = require('./router/CourseRouter.js')
const routerComment = require('./router/CommentRouter.js')

const studentMidleware  = require('./midleware/StudentMidleware.js')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express()

app.use(studentMidleware.logMidleware)

app.use("/api/v1", routerStudent)
app.use("/api/v1",routerCourse)
app.use("/api/v1",routerComment)

app.use(bodyParser.json())

app.use(cors())

mongoose.connect('mongodb+srv://profesornodejs:Admin123@cluster0.60gmm.mongodb.net/alumni?retryWrites=true&w=majority&appName=cluster0',() => {
    console.log("estamos conectados a mongo atlas !!np")
})

app.listen(8091,() => {
 console.log("start server in port 8091")
})