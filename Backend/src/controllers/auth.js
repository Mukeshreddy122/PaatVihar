const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// sign up controller
exports.signUp = (req, res, next) => {
  // validation using express validator
  const errors = validationResult(req);
  return res.status(400).json({
    errors: errors.array(),
  });

  //  find user in the db
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User already registered!",
      });
    }
    if (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
    // taking user input
    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
      role: "user",
    });
    // save user data to DB
    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          message: "User created successfully",
          user: data,
        });
      }
    });
  });
};
// signIn controller
exports.signIn = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    // if the user is found authenticate
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "user") {
        const token = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_TOKEN,
          {
            expiresIn: "1h",
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid password",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
