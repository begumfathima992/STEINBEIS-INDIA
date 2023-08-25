const mongoose = require("mongoose");
const { db_url } = require("../../config");

mongoose
  .connect('mongodb://127.0.0.1/steinbeisindia', {})
  .then(() => {
    console.log("Database Connection Successfully.....");
  })
  .catch((error) => {
    console.log(error, "Database not connected");
  });