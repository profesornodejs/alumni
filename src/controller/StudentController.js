
const routerStudent = require('../model/StudentModel')

const studentController = async (req,res) => {

 try {
 
    const nameUser = req.query.name;
    const passwordUser = req.query.password;

    console.log("request data [user]:" + nameUser)
    console.log("request data [password]:" + passwordUser)

    const data = await routerStudent.find({}).exec()

    let response = {}

    for (const document of data) {
        if(document.credential.user == nameUser && document.credential.password == passwordUser) {
            response = document
        } 
    }
    res.status(200).json(response)

 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = studentController