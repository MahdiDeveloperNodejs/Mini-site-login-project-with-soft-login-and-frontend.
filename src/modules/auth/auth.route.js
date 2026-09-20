const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();

router.route("/", authController.sendOTP);
module.exports = {
  authRouter: router,
};
