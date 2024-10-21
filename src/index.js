const routerStudent = require('./router/StudentRouter')
const routerCourse = require('./router/CourseRouter.js')
const routerComment = require('./router/CommentRouter.js')


const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use((req, res, next) => {
    console.log("[middleware] trace data:" + " [method] " + req.method + " [hostname]" + req.hostname + " [path] " + req.path + " [start time] " + Date.now())
    next()
  })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routerStudent)
app.use("/api/v1",routerCourse)
app.use("/api/v1",routerComment)


mongoose.connect('mongodb+srv://profesornodejs:Admin123@cluster0.60gmm.mongodb.net/alumni?retryWrites=true&w=majority&appName=cluster0',() => {
    console.log("estamos conectados a mongo atlas !!np")
})

app.listen(8091,() => {
 console.log("start server in port 8091")
})