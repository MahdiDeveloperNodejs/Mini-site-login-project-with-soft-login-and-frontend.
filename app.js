const express = require("express");
const router = require("./src/app.routes");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(exports.json());

app.use(router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
