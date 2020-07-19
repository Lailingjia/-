const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const gzSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    default: "已关注"
  },
  tximg: {
    type: String,
    require: true,
  },
  zzaccount: {
    type: String,
    require: true,
  },
});
var gz = mongoose.model('gz', gzSchema);

module.exports = gz;
