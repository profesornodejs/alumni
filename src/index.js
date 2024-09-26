const routerStudent = require('./router/StudentRouter')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use("/api/v1", routerStudent)

mongoose.connect('mongodb+srv://profesornodejs:Admin123@cluster0.60gmm.mongodb.net/alumni?retryWrites=true&w=majority&appName=cluster0',() => {
    console.log("estamos conectados a mongo atlas !!np")
})

app.listen(8091,() => {
 console.log("start server in port 8091")
})