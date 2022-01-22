const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/auth.routes");
// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// database connection
const dbURI = "mongodb+srv://harsh:12345@cluster0.1xawz.mongodb.net/node-auth";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("Listening on port 3000");
  })
  .catch((err) => console.log(err));

// routes
app.use(authRoutes);
