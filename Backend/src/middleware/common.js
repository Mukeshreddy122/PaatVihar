// require signin,next forwards request to next available function
// middle ware for signIn required
const jwt = require("jsonwebtoken");
exports.requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_TOKEN);
    // through this we can access user in next controller
    req.user = user;
    next();
  } else {
    return res.status(400).json({
      message: "Authorization required!",
    });
  }
};
// Any one can fetch data without login but only admin can create the data
// admin middle ware
exports.userMiddleware = (req, res, next) => {
  if (req.user.role != "user") {
    return res.status(403).json({
      message: " User access Denied",
    });
  }
  next();
};
// admin middle ware
exports.adminMiddleware = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(403).json({
      message: "Admin access Denied",
    });
  }
  next();
};
