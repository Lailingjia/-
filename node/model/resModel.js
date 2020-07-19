const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const resSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  zzaccount: {
    type: String,
    require: true,
  },
  plname: {
    type: String,
    require: true,
  },
  plcontent: {
    type: String,
    require: true,
  },
  placcount: {
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
var res = mongoose.model('res', resSchema);

module.exports = res;
