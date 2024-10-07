
const routerStudent = require('../model/StudentModel')

const studentController = async (req,res) => {

 try {
    const user = req.params.user
    const password = req.params.password

    console.log("request data [user]:" + user)
    console.log("request data [password]:" + password)

    const data = await routerStudent.find({password: password, username: user}).exec()
    console.log("response query mongo: " + data)
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({message: "el recurso no se encontro"})
    }
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = studentController