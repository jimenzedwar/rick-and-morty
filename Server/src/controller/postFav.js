const {Favorite} = require("../DB_connection");

module.exports = postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;
    if (name && origin && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: {
          name: name,
          origin: origin,
          status: status,
          image: image,
          species: species,
          gender: gender,
        },
      });
      const favorites = await Favorite.findAll();
      return res.status(200).json(favorites);
    } else return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
