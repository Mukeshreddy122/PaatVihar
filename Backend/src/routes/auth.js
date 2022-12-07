const express = require("express");
const { signUp, signIn } = require("../controllers/auth");

// express-validator is used for the validation of the user
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validators/auth");

const router = express.Router();

// routing
// once the request is validateRequest(middleware) ->request validate(middleware)-> signUp
router.post("/signin", validateSignInRequest, isRequestValidated, signIn);
router.post("/signup", validateSignUpRequest, isRequestValidated, signUp);

module.exports = router;
