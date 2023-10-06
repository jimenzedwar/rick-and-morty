const {User} = require("../DB_connection");

module.exports = postUser = async (req, res) => {
const { email, password } = req.body;
try {
    if (email && password) {
    const newUser = await User.findOrCreate({
        where: { email: email, password: password },
    });
    return res.status(200).json(newUser);
    } else return res.status(400).json({ message: "Faltan datos" });
} catch (error) {
    return res.status(500).json({ message: error.message });
}
};
