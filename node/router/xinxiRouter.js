const express = require('express')
const router = express.Router()
const xinxiModel = require('../model/xinxiModel')

router.post('/add', (req, res) => {
  //   let data = {
  //     "title": "火山飘雪",
  //     "author": "栀夏",
  //     "img": "/public/show1.jpg"
  //   }
  let {
    account,
    wx,
    qq,
    mail,
    word

  } = req.body
  xinxiModel.insertMany({
      account,
      wx,
      qq,
      mail,
      word

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

router.post('/getinfo', (req, res) => {
  let {
    account,
  } = req.body
  xinxiModel.find({
      account
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
  xinxiModel.remove({
      _id
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
  xinxiModel.updateOne({
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
  xinxiModel.find()
    .then((list) => {
      count = list.length
      return xinxiModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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

router.post('/getinfobykw', (req, res) => {
  let {
    kw
  } = req.body
  let reg = new RegExp(kw)
  xinxiModel.find({
      $or: [{
        account: {
          $regex: reg
        }
      }, {
        qq: {
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

router.post('/getinfoht', (req, res) => {
  let {
    _id
  } = req.body
  xinxiModel.find({
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
    _id,
    account,
    wx,
    qq,
    mail,
    word
  } = req.body
  xinxiModel.updateOne({
      _id
    }, {
      account,
      wx,
      qq,
      mail,
      word
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
