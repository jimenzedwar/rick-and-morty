const {User} = require("../DB_connection");

module.exports = login = async (req, res) => {
    try {
    const { email, password } = req.query;
    if (email && password) {
    const userFound = await User.findOne({ where: { email: email }});
    if (!userFound) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    if (userFound.password === password) {
        return res.status(200).json({ access: true });
    } else {
        return res.status(403).json({ message: "Contraseña incorrecta" });
    }
    } else return res.status(400).json({ message: "Faltan datos" });
} catch (error) {
    return res.status(500).json({ message: error.message });
}
};

// const user = require("../utils/users")

// const login = (req, res) => {
//     const {email, password} = req.query
//     if (user.some((user)=> user.email === email && user.password === password)) {
//         return res
//         .json({access: true})
//     } else {
//         return res
//         .status(401)
//         .json({access: false})
//     }
// }

// module.exports = {login}
