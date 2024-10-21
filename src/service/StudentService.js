
const studentRepository = require('../repository/StudentRepository.js')

const StudentLoginService = async (user, password) => {
return await studentRepository.getByCredentialStudent(user,password)
}

const GetStudentByIdService = async (id) => {
return await studentRepository.getStudentById(id)    
}

const CreateStudentService = async (data) => {
return await studentRepository.createStudent(data)
}

const AddCourseStudentService = async (id,data) => {
    return await studentRepository.addCourseStudent(id,data)
}

module.exports = studentervice = {
    studentLoginService: StudentLoginService,
    getStudentByIdService: GetStudentByIdService,
    createStudentService: CreateStudentService,
    addCourseStudentService: AddCourseStudentService
}