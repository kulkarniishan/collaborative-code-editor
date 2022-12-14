const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");
const { signJWT } = require("../helpers/jwtSign.helper");
const { verifyJWT } = require("../helpers/jwtVerify.helper");
const { redisClient } = require("../configs/redis.config");
// error handling
// const handleErrors = (err) => {
//   let errors = { email: "", password: "" };
//   console.log(err);
//   //incorrect email
//   if (err.message === "Incorrect email") {
//     errors.email = "That email is not registered";
//   }
//   //incorrect password
//   if (err.message === "Incorrect password") {
//     errors.password = "That password is incorrect";
//   }
//   if (err.code === 11000) {
//     //validation errors
//     errors.email = "That email is already registered";
//     return errors;
//   }

//   if (err.message.includes("user validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//       //console.log(errors);
//     });
//   }
//   return errors;
// };

//
const maxAge = 3 * 24 * 60 * 60 * 1000;

//cookie options
const cookieOptions = {
  httpOnly: true,
  maxAge: maxAge,
  signed: true,
};

module.exports = {
  register: async (req, res, next) => {
    console.log(req.body)
    const { email, password, name, avatar } = req.body;

    try {
      const user = await User.create({ email, password, name, avatar });
      const token = await signJWT({ _id: user._id });

      await redisClient.set(token, "", { EX: maxAge / 10 }); // value is in seconds be careful!!
      res.cookie("jwt", token, cookieOptions).status(201).json({
        status: "201",
        message: "Registered Successfully",
        user: { name, email, avatar },
      });
    } catch (error) {
      console.log(error)
      if (error.code === 11000)
        return next(
          createHttpError.Conflict(
            "User Already exists with the provided credentials"
          )
        );

      if (error.errors.email || error.errors.password)
        return next(createHttpError.UnprocessableEntity("Invalid Credentials"));

      next(createHttpError.InternalServerError("An Error occurred"));
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);

      const token = await signJWT({ _id: user._id });

      await redisClient.set(token, "", { EX: maxAge / 10 }); // value is in seconds be careful!!
      res
        .cookie("jwt", token, cookieOptions)
        .status(200)
        .json({
          status: "200",
          message: "Logged in Successfully",
          user: {
            name: user.name,
            email: user.email,
            avatar: user.avatar,
          },
        });
    } catch (error) {
      next(createHttpError.UnprocessableEntity());
    }
  },
  logout: async (req, res, next) => {
    try {
      await verifyJWT(req.signedCookies.jwt);
      await redisClient.del(req.signedCookies.jwt);
      res
        .cookie("jwt", "", { maxAge: 0 })
        .status(200)
        .json({ status: "200", message: "Logged out Successfully" });
    } catch (error) {
      next(createHttpError.BadRequest(error));
    }
  },
  getUser: async (req, res, next) => {

  },
  authorized: async (req, res, next) => {

  },
};