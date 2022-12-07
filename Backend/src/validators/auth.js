// module.exports is the default export where as the exports.function is not the default one
const { check, validationResult } = require("express-validator");
const category = require("../models/category");
exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("FirstName is Empty"),
  check("lastName").notEmpty().withMessage("LastName is Empty"),
  check("email").isEmail().withMessage("Email is Empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be atleast 6 characters!"),
];

exports.validateSignInRequest = [
  check("email").isEmail().withMessage("Email is Empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be atleast 6 characters!"),
];

exports.isRequestValidated = (req, res, next) => {
  // validation results function returns array of errors
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      // sending one by one errors at a time
      error: errors.array()[0].msg,
    });
    // once the request is granted then call the next() function
  }
  next();
};
