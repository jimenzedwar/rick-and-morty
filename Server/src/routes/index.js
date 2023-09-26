const {getCharById} = require("../controller/getCharById")
const {login} = require("../controller/login")
const {postFav, deleteFav} = require("../controller/handleFavorites")
const express = require("express")

const ruta = express.Router()

ruta.get("/character/:id", getCharById);

ruta.get("/login", login);

ruta.post("/fav", postFav);

ruta.delete("/fav/:id", deleteFav);


module.exports = ruta