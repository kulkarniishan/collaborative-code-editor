const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
     console.log("Establishment of server succeeded! Listening on port "+PORT)
})

