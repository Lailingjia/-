const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const actSchema = new Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },

});
var act = mongoose.model('act', actSchema);

module.exports = act;
