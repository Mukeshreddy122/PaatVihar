const express = require("express");
const { addCategory, getCategories } = require("../../controllers/category");
const { requireSignIn, adminMiddleware } = require("../../middleware/common");
const router = express.Router();
// only logged in admin can create categories
router.post("/category/create", requireSignIn, adminMiddleware, addCategory);
// any one can read data without login
router.get("/category/getcategories", getCategories);
// create a category using name
// create a sub category using name,parentId-> subcategory name and categories id
// get the category
module.exports = router;
