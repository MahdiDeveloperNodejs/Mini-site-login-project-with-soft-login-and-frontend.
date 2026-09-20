const { default: mongoose } = require("mongoose");
require("dotenv").config();
const URL = process.env.URL_MONGODB;
async function DB() {
  try {
    await mongoose.connect(URL);
    console.log("mongodb connected");
  } catch (err) {
    console.error("mongodb connection error:", err.message);
  }
}
DB();
