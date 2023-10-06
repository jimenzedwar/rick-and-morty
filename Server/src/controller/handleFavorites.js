// let myFavorites = []

// const postFav = (req, res) => {
//     const char = req.body
//     if (myFavorites.some((fav)=> fav.id === char.id)) {
//         return
//     } else {
//     myFavorites.push(char)
//     res.json(myFavorites)}
// }

// const deleteFav = (req, res) => {
//     const { id } = req.params
//     if (!id) {
//         const err = {error: "No se recibió el id del personaje a eliminar"}
//         return res.status(400).json(err)
//     }
//     if (id) {
//     const foundCharId = myFavorites.filter(char => char.id === Number(id))
//     if (foundCharId.length){
//     const indexToDelete = myFavorites.findIndex(char => char.id === Number(id))
//     myFavorites.splice(indexToDelete, 1)
//     return res.json(myFavorites)
// } else return 
// }else return 
// }

// module.exports = {postFav, deleteFav}