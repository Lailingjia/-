const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const comSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  zzaccount: {
    type: String,
    require: true,
  },
  myaccount: {
    type: String,
    require: true,
  },
  myname: {
    type: String,
    require: true,
  },
  mytximg: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  Time: {
    type: Date,
    default: Date.now
  },
});
var com = mongoose.model('com', comSchema);

module.exports = com;
