const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const workSchema = new Schema({
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
});
var work = mongoose.model('works', workSchema);

module.exports = work;
