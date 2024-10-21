const commentModel = require('../model/CommentModel')
const errorApp = require('../error/ErrorApp.js')

const GetAllCommentByStudentId = async (studentId) => {
    try {
        console.log("[GetAllComment Repository]")
        const response = await commentModel.find({ student: studentId }).exec()
        if(Object.keys(response).length === 0) {
            throw new errorApp.notResultfoundException()
        }
        console.log("[response comment model data]: " + response)
        return response
    } catch (error) {
        console.error("[Error query comment model]: " + error.message)
        throw error
    }

}

const CreateComment = (data) => {
    try {
        console.log("[CreateComment Repository with data]")
        let comment = new commentModel(data);
        console.log("comment document: " + comment)

        comment.save()
            .then(savedComment => {
                console.log("Saved Comment:", savedComment);
            })
            .catch(err => {
                console.error("Error save Comment:", err.message);
                throw err
            })
    } catch (error) {
        console.error("[Error repository course model]")
         throw new errorApp.businessException("An error occurred while trying to connect to the database")
    }

}

module.exports = {
    getAllCommentByStudentId: GetAllCommentByStudentId,
    createComment: CreateComment
} 