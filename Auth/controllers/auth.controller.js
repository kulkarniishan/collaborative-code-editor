const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const httpError = require("http-errors");

// error handling
const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  console.log(err);
  //incorrect email
  if (err.message === "Incorrect email") {
    errors.email = "That email is not registered";
  }
  //incorrect password
  if (err.message === "Incorrect password") {
    errors.password = "That password is incorrect";
  }
  if (err.code === 11000) {
    //validation errors
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      //console.log(errors);
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "dummy value", { expiresIn: maxAge });
};

module.exports = {
  register: async (req, res, next) => {
    const { email, password, name, avatar } = req.body;

    try {
      const user = await User.create({ email, password, name, avatar });
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({
        status: "201",
        message: "Registered Successfully",
        user: { name, email, avatar },
      });
    } catch (error) {
      next(httpError.BadRequest(error));
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({
        status: "200",
        message: "Logged in Successfully",
        user: {
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      next(httpError.BadRequest(error));
    }
  },
  logout: (req, res, next) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res
        .status(200)
        .json({ status: "200", message: "Logged out Successfully" });
    } catch {
      next(httpError.BadRequest(error));
    }
  },
  authorized: async (req, res, next) => {},
};
