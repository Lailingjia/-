const mongoose = require("mongoose");

var Schema = mongoose.Schema;
const talkSchema = new Schema({
  tximg: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    require: true,
  },
  accepter: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  Time: {
    type: Date,
    default: Date.now
  },
});
var talk = mongoose.model('talk', talkSchema);

module.exports = talk;
