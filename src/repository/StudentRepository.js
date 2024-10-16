const studentModel = require('../model/StudentModel.js')

const GetByCredentialStudent = async (user,password) => {  
 try {
     console.log("[GetByCredentialStudent Repository]")

     let response = {}

     console.log("user: " + user + ", passwoord: " + password)

     const data = await studentModel.find({}).exec()

     for (const document of data) {
         if(document.credential.user == user && document.credential.password == password) {
             response = document
         } 
     }
     console.log("[GetByCredentialStudent Repository response data]: " + response)
     return response
 } catch (error) {
    console.log("[Error repository course model]: " + error.message())
 }

}

const GetStudentById = async (studentId) => {  
    try {
        console.log("[GetStudentById Repository]")
        const filter = {_id: studentId}
        console.log("[filter student model]: " + filter)
        const response = await studentModel.find(filter).exec()
        console.log("[response student data]: " + response)
        return response
    } catch (error) {
       console.log("[Error repository student model]: " + error.message())
    }
   
   }

module.exports = {
    getByCredentialStudent: GetByCredentialStudent,
    getStudentById: GetStudentById
 } 