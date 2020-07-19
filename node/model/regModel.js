const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const regSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
var reg = mongoose.model('reg', regSchema);

module.exports = reg;
