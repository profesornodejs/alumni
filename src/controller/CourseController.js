const courseModel = require('../model/StudentModel')

const CourseController = async (req,res) => {
 try {
    const data = await courseModel.find({}).exec()
    console.log("response query mongo: " + data)
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({message: "el recurso no se encontro"})
    }
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = CourseController