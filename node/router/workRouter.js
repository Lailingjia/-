const express = require('express')
const router = express.Router()
const workModel = require('../model/workModel')

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
  } = req.body
  workModel.insertMany({
      title,
      author,
      img
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
    author
  } = req.body
  workModel.find({
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

router.post('/getinfobykw', (req, res) => {
  let {
    kw
  } = req.body
  let reg = new RegExp(kw)
  workModel.find({
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
  workModel.remove({
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
  workModel.updateOne({
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

  workModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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

module.exports = router
