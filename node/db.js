const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/mine', {
  useNewUrlParser: true
});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo 连接出错'));
db.once('open', () => console.log('Mongo 连接成功'));
