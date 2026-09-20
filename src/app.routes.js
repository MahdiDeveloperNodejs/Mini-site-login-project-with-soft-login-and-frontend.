const { Router } = require("express");
const { authRouter } = require("./modules/auth/auth.route");

const router = Router();

router.use("/auth", authRouter);

module.exports = router;
