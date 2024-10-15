const studentervice = require('../service/studentService')

const studentLoginController = async (req,res) => {

 try {
 
    const nameUser = req.query.name;
    const passwordUser = req.query.password;

    let response = await studentervice.studentLoginService(nameUser,passwordUser)

    res.status(200).json(response)

 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = studentLoginController