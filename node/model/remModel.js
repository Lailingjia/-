const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const remSchema = new Schema({

  title: {
    type: String,
    require: true,
  },
});
var rem = mongoose.model('rem', remSchema);

module.exports = rem;
