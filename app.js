const express = require("express");
const swaggerConfig = require("./src/config/swagger.config");
const app = express();
require("dotenv").config();
require("./src/config/mongodb.config");
const router = require("./src/app.routes");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
swaggerConfig(app);
app.use(router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
