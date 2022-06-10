const jwt = require("jsonwebtoken")

const generateToken = (data) => {
    const token = jwt.sign(data, "Muskan")
    return token
}

module.exports = {
    generateToken
}
