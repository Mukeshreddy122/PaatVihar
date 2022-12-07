const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// schema creation
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
			min: 3,
			max: 20,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
        userName: {
			type: String,
			required: true,
			trim: true,
			index: true,
			unique: true,
			lowercase: true,
		},
		hash_password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		contactNumber: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
// password
userSchema.virtual("password").set(function (password) {
    this.hash_password= bcrypt.hashSync(password, 10);
});
// full name 
userSchema.virtual("fullName").get(function(){
	return `${this.firstName} ${this.lastName}`
})
userSchema.methods = {
	authenticate: function (password) {
		return bcrypt.compareSync(password,this.hash_password)
	},
};

// exporting the user schema
module.exports = mongoose.model("User", userSchema);
