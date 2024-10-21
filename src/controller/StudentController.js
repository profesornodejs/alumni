const studentervice = require('../service/StudentService.js')
const errorApp = require('../error/ErrorApp.js')

const StudentLoginController = async (req,res) => {
 try {
    console.log("[start studentLoginController]")
    const user = req.query.user;
    const password = req.query.password;

    let response = await studentervice.studentLoginService(user,password)
    console.log("[end studentLoginController]")
    res.status(200).json(response)
 } catch (ex) {
   const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "StudentLoginController")
   res.status(500).json(errorResponse)
 }

}

const GetStudentByIdController = async (req,res) => {
   try {
      console.log("[start GetStudentByIdController]")
      const id = req.params.id;
      let response = await studentervice.getStudentByIdService(id)
      console.log("[end GetStudentByIdController]")
      res.status(200).json(response)
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "GetStudentByIdController")
      res.status(500).json(errorResponse)
   }

  }

const CreateStudentController =  async (req,res) => {
   try {
      console.log("[start CreateStudentController]")
      const data = req.body
      let response = await studentervice.createStudentService(data)
      console.log("[end CreateStudentController]")
      res.status(201).json(response)
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "CreateStudentController")
      res.status(500).json(errorResponse)
   }

  }

  const AddCourseStudentController =  async (req,res) => {
   try {
      console.log("[start AddCourseStudentController]")
      const data = req.body
      const id = req.params.id
      let response = await studentervice.addCourseStudentService(id,data)
      console.log("[end AddCourseStudentController]")
      res.status(201).json(response)
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "AddCourseStudentController")
      res.status(500).json(errorResponse)
   }

  }


module.exports = { 
   studentLoginController: StudentLoginController,
   getStudentByIdController: GetStudentByIdController,
   createStudentController: CreateStudentController,
   addCourseStudentController: AddCourseStudentController

} 
