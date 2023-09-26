const axios = require("axios")


const getCharById = (req, res) => {
    const { id } = req.params;
    const URL = `https://rickandmortyapi.com/api/character/${id};`
    axios.get(URL)
      .then(({ data }) => {
        const { id, status, name, species, origin, image, gender } = data;
        const char = { id, status, name, species, origin, image, gender }
        char.name 
          ?  res.status(200).json(char)
          : res.status(404).send("not found")
        })
        .catch(error => res.status(500).json(error.message))
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