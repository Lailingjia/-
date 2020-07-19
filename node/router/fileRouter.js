const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //指定文件路径
    cb(null, './static/img')
  },

  filename: function (req, file, cb) {
    //指定文件名
    let ext = file.originalname.split('.')[1]
    let tmpname = (new Date()).getTime() + parseInt(Math.random() * 9999)
    cb(null, `${tmpname}.${ext}`);
  }

});

var upload = multer({
  storage: storage
})

router.post('/upload', upload.single('lai'), (req, res) => { //single单文件上传,.array多文件
  //lai 要上传图片数据的key值
  console.log(req.file)
  let {
    size,
    mimetype,
    path
  } = req.file
  let types = ['jpg', 'jpeg', 'png'] //允许上传的数据类型
  let tmptype = mimetype.split('/')[1]
  if (size > 5000000) {
    return res.send({
      err: -1,
      msg: '尺寸过大'
    })
  } else if (types.indexOf(tmptype) == -1) {
    return res.send({
      err: -2,
      msg: '文件类型错误'
    })
  } else {
    let url = `/public/img/${req.file.filename}`
    res.send({
      err: 0,
      msg: '上传成功',
      img: url
    })
  }
})
module.exports = router
