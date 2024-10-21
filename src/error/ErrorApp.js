
function businessException(message) {
    this.message = message
    this.typeError = "BusinessException"
}

function notResultfoundException() {
    this.message = "there are not results on database for you query"
    this.typeError = "notResultfoundException"
}

function notDeleteByIdException() {
    this.message = "it was not possible to delete the document"
    this.typeError = "notDeleteByIdException"
}

function responseException(message,typeError,operation) {
    this.message = message
    this.typeError = typeError
    this.operation = operation
}

exports.businessException = businessException
exports.notResultfoundException = notResultfoundException
exports.responseException = responseException
exports.notDeleteByIdException = notDeleteByIdException