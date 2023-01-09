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
    latitude: {
      type: String,
      required: true,
      unique: true,
    },
    longitude: {
      type: String,
      required: true,
      unique: true,
    },
    type: { type: String, required: true },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    // matterport string
    matterport: [
      {
        type: String,
        trim: true,
      },
    ],
    description: {
      type: String,
      required: true,
      trim: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    boardOfEduction: {
      type: String,
      required: true,
      trim: true,
    },
    ratings: {
      type: String,
    },
    phone: {
      type: String,
    },
    url: {
      type: String,
    },
    schoolPictures: [
      {
        img: {
          type: String,
        },
      },
    ],
    reviews: [
      {
        // foreign key (referring to another table)
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    updatedAt: Date,
  },

  { timestamps: true }
);
// category cannot be replicated because slug is unique
// category is part of user and admin
// admin->CRUD
// user->Read trim removes spaces in between
module.exports = mongoose.model("School", categorySchema);
