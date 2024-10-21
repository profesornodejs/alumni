const commentService = require('../service/CommentService.js')
const errorApp = require('../error/ErrorApp.js')

const GetAllCommentByStudentIdController = async (req, res) => {
   try {
      console.log("[start GetAllCommentByStudentIdController]")
      const studentId = req.query.studentId
      let response = await commentService.getAllCommentByStudentIdService(studentId)
      console.log("[end GetAllCommentByStudentIdController]")
      res.status(200).json(response)
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "GetAllCommentByStudentIdController")
      res.status(500).json(errorResponse)
   }

}

const SaveCommentController = async (req, res) => {
   try {
      const data = req.body
      console.log("[start SaveCommentController with data]" + JSON.stringify(data))
      await commentService.saveCommentService(data)
      console.log("[end SaveCommentController]")
      res.status(204).json(req.body)
   } catch (ex) {
      const errorResponse = new errorApp.responseException(ex.message, ex.typeError, "SaveCommentController")
      res.status(500).json(errorResponse)
   }

}

module.exports = {
   getAllCommentByStudentIdController: GetAllCommentByStudentIdController,
   saveCommentController: SaveCommentController
} 
