//socket.io requirements
const io = require('socket.io')(process.env.SOCKET_PORT);
io.on("connection",(socket)=>{
    socket.emit("confirm-connection", {message : "Connection with socket server established"});
})

module.exports = {
    // Business logic that uses socket based interaction with the Client
}