
const courseModel = require('../model/CourseModel')

const courseService = async (userId) => {
 try {
    const filter = {student_id: userId}
    const response = await courseModel.find(filter).exec()
    return response
 } catch (error) {
    return response = {}
 }

}

module.exports = courseService