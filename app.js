const express = require("express");
const router = require("./src/app.routes");
const swaggerConfig = require("./src/config/swagger.config");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
swaggerConfig(app);
app.use(router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
