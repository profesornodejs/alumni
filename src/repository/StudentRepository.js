const students = require('../model/StudentModel.js')
const errorApp = require('../error/ErrorApp.js')

const GetByCredentialStudent = async (user,password) => {  
 try {
     console.log("[GetByCredentialStudent Repository]")
     let response = {}
     const data = await students.find({}).exec()
     for (const document of data) {
         if(document.credential.user == user && document.credential.password == password) {
             response = document
         } 
     }
     console.log("[GetByCredentialStudent Repository response data]: " + response)
     return response
 } catch (error) {
    throw new errorApp.businessException("An error occurred while trying to connect to the database")
 }

}

const GetStudentById = async (id) => {
    try {
        console.log("[GetStudentById Repository]")
        const response = await students.find({_id: id}).populate("courses").exec()
        if(Object.keys(response).length === 0) {
            throw new errorApp.notResultfoundException()
        }
        console.log("[response student data]: " + response)
        return response
    } catch (error) {
        console.error("[Error query student model]: " + error.message)
        throw error
    }

   }

const CreateStudent = async (data) => {
    try {
        console.log("[CreateStudent Repository]")
        const student = new students(data)
        await student.save()
        console.log("[response student data]: " + student)
        return student
    } catch (error) {
        console.error("[Error query student model]: " + error.message)
        throw new errorApp.businessException("An error occurred while trying to connect to the database")
    }
}

const AddCourseStudent = async (id,data) => {
    try {
        console.log("[AddCourseStudent Repository]")
        const filter = { _id: id }
        const response = await students.findByIdAndUpdate(filter, data, { new: true });
        if (!response) {
            if(Object.keys(response).length === 0) {
                throw new errorApp.notResultfoundException()
            }
        } else {
            console.log("[response student data]: " + response)
            return response
        }
    } catch (error) {
        console.error("[Error query student model]: " + error.message)
        throw error
    }

   }



module.exports = {
    getByCredentialStudent: GetByCredentialStudent,
    getStudentById: GetStudentById,
    createStudent: CreateStudent,
    addCourseStudent: AddCourseStudent
 } 