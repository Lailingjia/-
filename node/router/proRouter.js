const express = require('express')
const router = express.Router()
const proModel = require('../model/proModel')

router.post('/add', (req, res) => {
  //   let data = {
  //     "title": "火山飘雪",
  //     "author": "栀夏",
  //     "img": "/public/show1.jpg"
  //   }
  let {
    title,
    author,
    img,
    intro,
    tximg,
    myaccount,
    Time
  } = req.body
  proModel.insertMany({
      title,
      author,
      img,
      intro,
      tximg,
      myaccount,
      Time

    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '添加成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '添加失败'
      })
    })
})

router.post('/getinfoht', (req, res) => {
  let {
    _id
  } = req.body
  proModel.find({
      _id: _id
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/updateht', (req, res) => {
  let {
    title,
    author,
    _id,
    intro,
    myaccount,
    tximg
  } = req.body
  proModel.updateOne({
      _id
    }, {
      title,
      author,
      intro,
      myaccount,
      tximg
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '修改成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '修改失败'
      })
    })
})


router.post('/getinfo', (req, res) => {

  proModel.find().sort({
      _id: -1
    }).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})



router.post('/getyhtj', (req, res) => {

  proModel.find().limit(8).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/getzxtj', (req, res) => {

  proModel.find().limit(16).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/getzjtj', (req, res) => {

  proModel.find().limit(20).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/getinfobykw', (req, res) => {
  let {
    kw
  } = req.body
  let reg = new RegExp(kw)
  proModel.find({
      $or: [{
        title: {
          $regex: reg
        }
      }, {
        author: {
          $regex: reg
        }
      }]
    }).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})


router.post('/del', (req, res) => {
  let {
    _id
  } = req.body
  proModel.remove({
      _id: _id
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '删除成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '删除失败'
      })
    })
})


router.post('/update', (req, res) => {
  let {
    title,
    author,
    img,
    _id
  } = req.body
  proModel.updateOne({
      _id
    }, {
      title,
      author,
      img
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '修改成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '修改失败'
      })
    })
})

router.post('/getinfobypage', (req, res) => {
  let pagesize = req.body.pagesize || 2
  let page = req.body.page || 1
  let count = 0
  proModel.find()
    .then((list) => {
      count = list.length
      return proModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
    })
    .then((data) => {
      let allpage = Math.ceil(count / pagesize)

      res.send({
        err: 0,
        msg: '查询成功',
        info: {
          list: data,
          count: count,
          allpage: allpage
        }
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})


router.post('/getdet', (req, res) => {
  let {
    title,
    author
  } = req.body
  proModel.find({
      title,
      author
    }).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/getper', (req, res) => {
  let {
    author
  } = req.body
  proModel.find({
      author
    }).sort({
      _id: -1
    }).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})

router.post('/getiwork', (req, res) => {
  let {
    myaccount
  } = req.body
  proModel.find({
      myaccount
    }).then((data) => {
      res.send({
        err: 0,
        msg: '查询成功',
        list: data
      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})


router.post('/delet', (req, res) => {
  let {
    title
  } = req.body
  proModel.remove({
      title
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '删除成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '删除失败'
      })
    })
})

router.post('/updatetx', (req, res) => {
  let {
    myaccount,
    tximg
  } = req.body
  proModel.updateMany({
      myaccount
    }, {
      tximg
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '修改成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '修改失败'
      })
    })
})

router.post('/updateauthor', (req, res) => {
  let {
    myaccount,
    author,
  } = req.body
  proModel.updateMany({
      myaccount
    }, {
      author,
    })
    .then((data) => {
      res.send({
        err: 0,
        msg: '修改成功',

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '修改失败'
      })
    })
})
module.exports = router
