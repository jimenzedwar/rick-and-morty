const axios = require("axios")


const getCharById  = async (req, res) => {
    const charId = req.params.id;
    const URL = `https://rickandmortyapi.com/api/character/${charId};`
    try {
      const { data } = await axios.get(URL)
          const { id, status, name, species, origin, image, gender } = data;
          const char = { id, status, name, species, origin, image, gender }
          res.status(200).json(char)
          }
    catch (error) {
      res.status(500).json(error.message)
    }
}

    //         if (data.name) {
    //         const character = {
    //             id: id,
    //             name: data.name,
    //             gender: data.gender,
    //             species: data.species,
    //             origin: data.origin,
    //             image: data.image,
    //             status: data.status
    //             }
    //             res.writeHead(200, { "Content-Type": "application/json" })
    //             res.end(JSON.stringify(character));
    //         } else {
    //             return
    //         }}).catch( err => {
    //             res.writeHead(500, { "Content-Type": "text/plain" })
    //             .end(JSON.stringify(err.message))}
    //         )
    // }

module.exports = {getCharById}