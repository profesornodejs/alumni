const courseService = require('../service/CourseService.js')

const GetAllCourseController = async (req,res) => {
 try {
    console.log("[start GetAllCourseController]")
    const data = await courseService.getAllcourseService()
    res.status(200).json(data)
    console.log("[end GetAllCourseController]")
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

const GetCourseByIdController = async (req,res) => {
   try {
      const id = req.query.id;
      console.log("[start GetCourseByIdController]")
      const data = await courseService.getCourseByIdService(id)
      res.status(200).json(data)
      console.log("[end GetCourseByIdController]")
   } catch (error) {
      res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
   }
  
  }

module.exports = { 
   getAllCourseController: GetAllCourseController,
   getCourseByIdController: GetCourseByIdController
} 