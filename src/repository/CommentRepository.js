const commentModel = require('../model/CommentModel')

const GetAllCommentByStudentId = async (studentId) => {
 try {
     console.log("[GetAllComment Repository]")
     const response = await commentModel.find({student: studentId}).exec()
     console.log("[response comment model data]: " + response)
     return response
 } catch (error) {
    console.log("[Error repository course model]: " + error.message())
 }

}

const CreateComment = (data) => {  
    try {
        console.log("[CreateComment Repository with data]" + data)
        let comment = new commentModel(data);
        comment.save().catch((ex) => {
            console.log("[error persisten objet Comment]:" + ex.message())
        })
        return response
    } catch (error) {
       console.log("[Error repository course model]: " + error.message())
    }
   
   }

module.exports = {
    getAllCommentByStudentId: GetAllCommentByStudentId,
    createComment: CreateComment
 } 