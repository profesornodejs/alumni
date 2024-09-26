const routerStudent = require('../model/StudentModel')


const studentController = (req,res) => {
routerStudent
.find()
.then((data) => {
 res.status(200).json(data)
})
.catch((error) => {
 res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
})
}

module.exports = studentController