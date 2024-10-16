const courseModel = require('../model/CommentModel')

const GetAllCommentByStudentId = async (studentId) => {  
 try {
     console.log("[GetAllComment Repository]")
     const response = await courseModel.find({student: studentId}).exec()
     console.log("[response comment model data]: " + response)
     return response
 } catch (error) {
    console.log("[Error repository course model]: " + error.message())
 }

}

const CreateComment = (data) => {  
    try {
        console.log("[CreateComment Repository with data]" + data)
        let comment = new courseModel(data);
        comment.save()
        return response
    } catch (error) {
       console.log("[Error repository course model]: " + error.message())
    }
   
   }

module.exports = {
    getAllCommentByStudentId: GetAllCommentByStudentId,
    createComment: CreateComment
 } 