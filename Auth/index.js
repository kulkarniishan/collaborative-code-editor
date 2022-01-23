require("dotenv").config();
const express = require("express");
const cors = require("cors");
const httpError = require("http-errors");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8080;

// database connection
require("./configs/mongodb.config");

//redis connection
require("./configs/redis.config");

// middlewares

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", authRoutes);

//Invalid route
app.use(async (req, res, next) => {
  next(httpError.NotFound("This route does not exist"));
});

//error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log("Auth service listening on port 8080");
});

// signJWT({ _id: 1914034 })
// .then((res) => {
//     console.log(res)
//     return verifyJWT(res)
// })
// .then((res1)=>{
//     console.log(res1)
// })
// .catch((err)=>{
//     console.log('error',err)
// })
