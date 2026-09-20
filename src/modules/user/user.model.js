const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    fullname: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    
  },
  { timestamps: true },
);

const UserModel = model("User", UserSchema);
module.exports = UserModel;
