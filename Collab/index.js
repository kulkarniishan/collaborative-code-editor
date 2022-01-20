const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 8080;
const cors = require("cors")
//socket.io requirements
const io = require('socket.io')(server);

//Redis initialization
const {createClient} = require('redis')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

server.listen(port, ()=>{
     console.log("Establishment of server succeeded! Listening on port "+port)
})
let redisClient;
const connect = async()=>{
     
     try{
          redisClient = createClient() //Default port 6379
          await redisClient.connect()
          await redisClient.flushAll("ASYNC")
          console.log("Redis connected!!")

     }catch(e){
          console.log(e)
     }
}

connect()

