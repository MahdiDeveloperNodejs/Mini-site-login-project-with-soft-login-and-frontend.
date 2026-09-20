const { default: autoBind } = require("auto-bind");
const UserModel = require("../user/user.model");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async sendOtp() {
    ///v
  }
}

module.exports = new AuthService();
