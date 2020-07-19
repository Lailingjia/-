const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const zanSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  zzaccount: {
    type: String,
    require: true,
  },
  title: {
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
    default: "已赞"
  },
  tximg: {
    type: String,
    require: true,
  },
});
var zan = mongoose.model('zan', zanSchema);

module.exports = zan;
