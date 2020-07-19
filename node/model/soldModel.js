const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const soldSchema = new Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  account: {
    type: String,
    require: true,
  },
  tximg: {
    type: String,
    require: true,
  },
  jytype: {
    type: String,
    require: true,
  },
  propty: {
    type: String,
    require: true,
  },
  tool: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  Time: {
    type: Date,
    default: Date.now
  },
});
var sold = mongoose.model('sold', soldSchema);

module.exports = sold;
