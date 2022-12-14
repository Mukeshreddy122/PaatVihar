const School = require("../models/schools.js");
const slugify = require("slugify");

// create schools
exports.createSchool = (req, res, next) => {
  const {
    name,
    latitude,
    longitude,
    address,
    description,
    boardOfEduction,
    fees,
    category,
    matterport,
    ratings,
    createdBy,
  } = req.body;
  let schoolPictures = [];
  if (req.files.length > 0) {
    // array of file
    schoolPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const school = new School({
    name: name,
    slug: slugify(name),
    latitude,
    longitude,
    address,
    description,
    schoolPictures,
    boardOfEduction,
    fees,
    category,
    matterport,
    ratings,
    createdBy: req.user._id,
  });
  school.save((error, school) => {
    if (school) {
      return res.status(200).json({
        school,
      });
    }
    if (error) {
      return res.status(400).json({
        error,
      });
    }
  });
};
// getSchools
exports.getSchools = (req, res, next) => {
  School.find({}).exec((error, school) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if(school){
       return res.status(200).json({
         school,
       });
    }
  });
};
