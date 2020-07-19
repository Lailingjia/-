const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const proSchema = new Schema({
  img: {
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
  intro: {
    type: String,
    require: true,
  },
  tximg: {
    type: String,
    require: true,
  },
  myaccount: {
    type: String,
    require: true,
  },
  Time: {
    type: Date,
    default: Date.now
  },
});
var pro = mongoose.model('pro', proSchema);

module.exports = pro;
