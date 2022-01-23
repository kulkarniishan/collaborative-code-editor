const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");
const { signJWT } = require("../helpers/jwtSign.helper")
const { verifyJWT } = require("../helpers/jwtVerify.helper")

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
  signed: true
}

module.exports = {
  register: async (req, res, next) => {
    const { email, password, name, avatar } = req.body;

    try {
      const user = await User.create({ email, password, name, avatar });
      const token = await signJWT({ _id: user._id });
      console.log(token)
      res.cookie("jwt", token, cookieOptions);
      res.status(201).json({
        status: "201",
        message: "Registered Successfully",
        user: { name, email, avatar },
      });
    } catch (error) {
      if (error.code === 11000)
        return next(createHttpError.Conflict("User Already exists with the provided credentials"))

      if (error.errors.email || error.errors.password)
        return next(createHttpError.UnprocessableEntity("Invalid Credentials"));

      next(createHttpError.InternalServerError("An Error occured"))
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);
      const token = await signJWT({ _id: user._id });

      res
        .cookie("jwt", token, cookieOptions)
        .status(200).json({
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
  logout: (req, res, next) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 })
        .status(200)
        .json({ status: "200", message: "Logged out Successfully" });
    } catch {
      next(createHttpError.BadRequest(error));
    }
  },
  authorized: async (req, res, next) => {

  },
};
