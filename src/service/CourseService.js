
const courseReposotory = require('../repository/CourseReposotory.js')

const GetAllcourseService = () => {
return courseReposotory.getAllCourse()
}

const GetCourseByIdService = async (id) => {
   return await courseReposotory.GetCourseById(id)
   }

module.exports = { 
   getAllcourseService: GetAllcourseService,
   getCourseByIdService: GetCourseByIdService
} 