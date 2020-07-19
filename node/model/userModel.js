const mongoose = require("mongoose");
var Schema = mongoose.Schema;
/************** 定义模式loginSchema **************/
const userSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  acctype: {
    type: Number,
    default: 0,
  },
  tximg: {
    type: String,
    default: "http://127.0.0.1:3000/public/tximg/1581343140579.jpg",
  },
  intro: {
    type: String,
    default: "这个人很懒，什么也没留下",
  },
  // Time: {
  //   type: Date,
  //   default: Date.now
  // },
})

var user = mongoose.model('user', userSchema);

module.exports = user;
