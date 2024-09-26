const routerStudent = require('../model/StudentModel')


const studentController = (req,res) => {
console.log("soy un controller para el recurso de estudiante")
res.status(200).send({message: "todo bien"})
}

module.exports = studentController