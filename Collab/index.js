const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 8080;
const cors = require("cors")

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

server.listen(port, ()=>{
     console.log("Establishment of server succeeded! Listening on port "+port)
})





