const { default: mongoose } = require("mongoose");
require("dotenv").config();
const URL = process.env.URL_MONGODB;
async function DB() {
  mongoose
    .connect(URL)
    .then(console.log("server run start"))
    .catch((err) => {
      console.log(err, "error and mongodb");
    });
}
DB();
