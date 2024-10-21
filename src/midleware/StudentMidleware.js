const errorApp = require('../error/ErrorApp.js')


const ValidateUserAge = (req, res, next) => {
    console.log("[midleware - ValidateUserAge]")
    const age = req.body.age
    if (age <= 18) {
        const errorResponse = new errorApp.responseException("the user is a minor","midlewareValidation", "ValidateUserAge")
        res.status(400).json(errorResponse)
    } else {
        next()
    }
}

module.exports = {
    validateUserAge: ValidateUserAge

}