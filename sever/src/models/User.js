const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;