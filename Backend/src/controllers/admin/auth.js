const User = require("../../models/user");
const jwt = require("jsonwebtoken");

// sign up controller
exports.signUp = (req, res, next) => {
  //  find user in the db
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "Admin already registered!",
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
      role: "admin",
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
          message: "Admin created successfully",
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
      if (user.authenticate(req.body.password) && user.role === "admin") {
        const token = jwt.sign(
          {
            _id: user._id,
            role:user.role
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
// middle ware for signIn required
exports.requireSignIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_TOKEN);
  // through this we can access user in next controller
  req.user = user;
  next();
};
