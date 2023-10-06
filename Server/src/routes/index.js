const {getCharById} = require("../controller/getCharById")

const express = require("express");
const login = require("../controller/login");
const postUser = require("../controller/postUser");
const postFav = require("../controller/postFav");
const deleteFav = require("../controller/deleteFav");

const ruta = express.Router()

ruta.get("/character/:id", getCharById);
ruta.post("/login", postUser)
ruta.get("/login", login)
ruta.post("/fav", postFav)
ruta.delete("/fav/:id", deleteFav)


module.exports = ruta