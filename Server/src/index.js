let http = require("http");
let data = require("./utils/utils")
let getCharById = require("./controller/getCharById")
module.exports = 

http.createServer((req, res) => {
    console.log(`Server raised in port ${3001}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        let id = req.url.split("/").pop()
        getCharById(id, res)
    }
}).listen(3001, "localhost");