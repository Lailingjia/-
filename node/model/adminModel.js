const mongoose = require("mongoose");
var Schema = mongoose.Schema;
/************** 定义模式loginSchema **************/
const adminSchema = new Schema({
  account: {
    type: String,
    require: true,
  },
  password: {
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
})

// const formatter = (date) => {
//   return `${date.split('T')[0]} ${date.split('T')[1].split('.')[0]}`;
// }


var admin = mongoose.model('admin', adminSchema);

module.exports = admin;
