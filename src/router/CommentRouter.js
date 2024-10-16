const express = require('express')
const commentController = require('../controller/CommentController.js')

const routerComment = express.Router();
routerComment.get("/comment/student", commentController.getAllCommentByStudentIdController)
routerComment.post("/comment/student", commentController.saveCommentController)


module.exports = routerComment