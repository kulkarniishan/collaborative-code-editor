const mongoose = require("mongoose");

let mongoConnection = mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log(`Collab DB Connected`);
    })


mongoose.connection.on("connected",()=>{
    console.log("Connection with mongoDB established");
})

mongoose.connection.on("error",(err)=>{
    console.log(`Error occurred : ${err.message}`);
})

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected !!");
})


module.exports = mongoConnection;