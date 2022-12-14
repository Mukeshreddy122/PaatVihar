const express = require("express");
const { createSchool, getSchools,getSchoolsById ,updateSchool} = require("../controllers/schools");
const { requireSignIn, adminMiddleware } = require("../middleware/common");
const multer = require("multer");
const shortid = require("shortid");
const router = express.Router();
const School = require("../models/schools");
const path =require("path")
// file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join( path.dirname(__dirname),'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// only logged in admin can create categories
router.post(
  "/school/create",
  requireSignIn,
  adminMiddleware,
  upload.array("schoolPictures"),
  createSchool
);
router.get("/schools", getSchools);
// any one can read data without login
// router.get("/school/getcategories", getCategories);
// create a category using name
router.get("/school/:id",getSchoolsById)
// create a sub category using name,parentId-> subcategory name and categories id
// get the category
module.exports = router;
