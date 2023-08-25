const express = require("express");
const app = express();
const { port } = require("./config");
const user = require("./src/routers/user");
const asset = require("./src/routers/asset");
const cors = require('cors');
require("./src/db/conn");
const path = require("path");
// const cors = require("cors");
// app.use(cors());
app.use(cors());
app.use(express.static(path.dirname("./public/uploads")));
app.use(express.json());
app.use("/v1/user", user);
app.use("/v1/asset", asset);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});