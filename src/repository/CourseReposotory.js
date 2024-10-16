const courseModel = require('../model/CourseModel')

const GetAllCourse = async () => {  
 try {
     console.log("[GetAllCourse Repository]")
     const response = await courseModel.find({}).exec()
     console.log("[response course model data]: " + response)
     return response
 } catch (error) {
    console.log("[Error repository course model]: " + error.message())
 }

}

const GetCourseById = async (id) => {  
    try {
        console.log("[GetCourseById Repository]")
        const filter = {_id: id}
        const response = await courseModel.find(filter).exec()
        console.log("[response course model data]:" + response)
        return response
    } catch (error) {
       console.log("[Error repository course model]: " + error.message())
    }
   
   }

module.exports = {
    getAllCourse: GetAllCourse,
    GetCourseById: GetCourseById
 } 