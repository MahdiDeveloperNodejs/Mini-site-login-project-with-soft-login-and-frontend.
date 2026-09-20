const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();

router.route("/send-otp").post(authController.create);
module.exports = {
  authRouter: router,
};
