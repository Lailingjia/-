const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const xinxiSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  wx: {
    type: String,
    require: true,
  },
  qq: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  word: {
    type: String,
    require: true,
  },


});
var xinxi = mongoose.model('xinxi', xinxiSchema);

module.exports = xinxi;
