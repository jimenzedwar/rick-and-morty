const user = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query
    if (user.some((user)=> user.email === email && user.password === password)) {
        return res
        .json({access: true})
    } else {
        return res
        .status(401)
        .json({access: false})
    }
}

module.exports = {login}