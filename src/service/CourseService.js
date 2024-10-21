
const courseReposotory = require('../repository/CourseReposotory.js')

const DeleteCourseByIdService = async (id) => {
   return await courseReposotory.deleteCourseById(id)
   }

const GetAllcourseService = async () => {
   return await courseReposotory.getAllCourse()
}    

module.exports = { 
   deleteCourseByIdService: DeleteCourseByIdService,
   getAllcourseService: GetAllcourseService
}