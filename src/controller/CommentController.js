const commentService = require('../service/CommentService.js')

const GetAllCommentByStudentIdController = async (req,res) => {
 try {
    console.log("[start GetAllCommentByStudentIdController]")
    const studentId = req.query.studentId
    let response = await commentService.getAllCommentByStudentIdService(studentId)
    console.log("[end GetAllCommentByStudentIdController]")
    res.status(200).json(response)
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

const SaveCommentController = async (req,res) => {
   try {
      const data = req.body
      console.log("[start SaveCommentController with data]" + data)
      await commentService.saveCommentService(data)
      console.log("[end SaveCommentController]")
      res.status(204).json(req.body)
   } catch (error) {
      res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
   }
  
  }

module.exports = { 
    getAllCommentByStudentIdController: GetAllCommentByStudentIdController,
    saveCommentController: SaveCommentController
} 
