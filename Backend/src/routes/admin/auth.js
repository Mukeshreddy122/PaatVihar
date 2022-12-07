const express = require("express");
const { signUp, signIn } = require("../../controllers/admin/auth");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../../validators/auth");

// express-validator is used for the validation of the user
// const {check}=require('express-validator')

const router = express.Router();

// routing

router.post("/admin/signin", validateSignInRequest, isRequestValidated, signIn);

router.post("/admin/signup", validateSignUpRequest, isRequestValidated, signUp);

module.exports = router;
