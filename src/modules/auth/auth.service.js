const { default: autoBind } = require("auto-bind");
const UserModel = require("../user/user.model");
const createHttpErrors = require("http-errors");
const AuthMessages = require("./auth.message");
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async create({ fullname, name, password }) {
    const checkExistByFullname = await this.#model.findOne({ fullname });
    if (checkExistByFullname)
      throw new createHttpErrors.NotFound(AuthMessages.NotFound);
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
    const createBcrypt = await bcrypt.hash(password, saltRounds);
    const createUser = await this.#model.create({
      fullname,
      name,
      password: createBcrypt,
    });
    const accession = this.singToken({ fullname, id: createUser._id });
    
    return accession;
  }
  singToken(payload) {
    return jwt.sign(payload, process.env.URL_SECRT, { expiresIn: "1y" });
  }
}

module.exports = new AuthService();
