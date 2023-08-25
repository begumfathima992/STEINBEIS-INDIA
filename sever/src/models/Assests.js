const mongoose = require("mongoose");

const assestsSchema = mongoose.Schema(
    {
        assetName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        cost:{
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Assest = mongoose.model("Assests", assestsSchema);

module.exports = Assest;