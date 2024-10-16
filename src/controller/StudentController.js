const studentervice = require('../service/StudentService.js')

const StudentLoginController = async (req,res) => {
 try {
    console.log("[start studentLoginController]")
    const user = req.query.user;
    const password = req.query.password;

    let response = await studentervice.studentLoginService(user,password)
    console.log("[end studentLoginController]")
    res.status(200).json(response)
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = { 
   studentLoginController: StudentLoginController
} 
