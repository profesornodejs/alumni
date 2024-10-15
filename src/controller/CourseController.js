const courseService = require('../service/courseService')

const CourseController = async (req,res) => {
 try {
    const userId = req.query.id
    const data = await courseService(userId)
    console.log("response query mongo: " + data)
    res.status(200).json(data)
 } catch (error) {
    res.status(500).json({message: "hubo un error al tratar de procesar la solicitus"})
 }

}

module.exports = CourseController