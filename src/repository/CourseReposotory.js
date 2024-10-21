const courses = require('../model/CourseModel')
const errorApp = require('../error/ErrorApp.js')

const DeleteCourseById = async (id) => {
    try {
        console.log("[DeleteCourseById Repository]")
        const response = await courses.findByIdAndDelete(id).exec()
        if (!response) {
            throw new errorApp.notDeleteByIdException()
        }
        console.log("[response course model data]:" + response)
        return response
    } catch (error) {
        console.error("[Error query course model]: " + error.message)
        throw error
    }
   
   }

   const GetAllCourse = async () => {
    try {
        console.log("[GetAllCourse Repository]")
        const response = await courses.find({}).exec()
        console.log("[response course model data]:" + response)
        return response
    } catch (error) {
        console.error("[Error query course model]: " + error.message)
        throw new errorApp.businessException("An error occurred while trying to connect to the database")
    }
   
   }

module.exports = {
    deleteCourseById: DeleteCourseById,
    getAllCourse: GetAllCourse
 } 