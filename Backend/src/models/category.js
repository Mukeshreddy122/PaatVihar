const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);
// category cannot be replicated because slug is unique
// category is part of user and admin
// admin->CRUD
// user->Read
module.exports = mongoose.model("Category", categorySchema);
