const courseService = require('../service/CourseService.js')
const errorApp = require('../error/ErrorApp.js')

const DeleteCourseByIdController = async (req, res) => {
   try {
      const id = req.params.id;
      console.log("[start DeleteCourseByIdController]")
      const data = await courseService.deleteCourseByIdService(id)
      res.status(200).json(data)
      console.log("[end DeleteCourseByIdController]")
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "DeleteCourseByIdController")
      res.status(500).json(errorResponse)
   }

}


const GetAllCourseController = async (req, res) => {
   try {
      console.log("[start GetAllCourseController]")
      const data = await courseService.getAllcourseService()
      res.status(200).json(data)
      console.log("[end GetAllCourseController]")
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "GetAllCourseController")
      res.status(500).json(errorResponse)
   }

}

module.exports = {
   deleteCourseByIdController: DeleteCourseByIdController,
   getAllCourseController: GetAllCourseController
} 