const { default: autoBind } = require("auto-bind");
const authService = require("./auth.service");
const AuthMessages = require("./auth.message");

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async create(req, res, next) {
    try {
      const { fullname, name, password } = req.body;
      const user = await this.#service.create({ fullname, name, password });
      return res.status(201).json({
        message: AuthMessages.CreateLoginSuessfully,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
