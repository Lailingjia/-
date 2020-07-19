const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const showSchema = new Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  }
});
var show = mongoose.model('show', showSchema);

module.exports = show;
