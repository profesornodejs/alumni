
const studentModel = require('../model/StudentModel')

const studentLoginService = async (nameUser, passwordUser) => {
 try {

    const data = await studentModel.find({}).exec()
    let response = {}

    for (const document of data) {
        if(document.credential.user == nameUser && document.credential.password == passwordUser) {
            response = document
        } 
    }
    return response
 } catch (error) {
    return response = {}
 }

}

const studentDataService = async (userId) => {
    try {
       
       const filter = {_id: userId}
       const response = await studentModel.find(filter).exec()
       return response
    } catch (error) {
       return response = {}
    }
   
   }


module.exports = studentervice = {

    studentLoginService: studentLoginService,
    studentDataService: studentDataService,
}