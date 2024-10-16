const commentRepository = require('../repository/CommentRepository.js')

const GetAllCommentByStudentIdService = (studentId) => {
return commentRepository.getAllCommentByStudentId(studentId)
}


const SaveCommentService = (data) => {
 return commentRepository.createComment(data)
}


module.exports = { 
    getAllCommentByStudentIdService: GetAllCommentByStudentIdService,
    saveCommentService: SaveCommentService

} 