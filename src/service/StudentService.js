
const studentRepository = require('../repository/StudentRepository.js')

const StudentLoginService = async (user, password) => {
return await studentRepository.getByCredentialStudent(user,password)
}

module.exports = studentervice = {
    studentLoginService: StudentLoginService,
}