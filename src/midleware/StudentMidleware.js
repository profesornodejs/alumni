
const LogMidleware = (req, res, next) => {
    console.log("[api rest midleware]")
    next()
}

const ValidateUser = (req, res, next) => {
    console.log("[midleware - validateUser]")
    const user = req.query.user
    if (user) {
        console.log("query param [user]:" + user)
        next()
    } else {
        res.status(402).send("es necesario ingresar query param  user")
    }
}

module.exports = {
    logMidleware: LogMidleware,
    validateUser: ValidateUser

}