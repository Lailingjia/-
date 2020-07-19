const express = require('express')
const router = express.Router()
const talkModel = require('../model/talkModel')

router.post('/add', (req, res) => {
  //   let data = {
  //     "title": "火山飘雪",
  //     "author": "栀夏",
  //     "img": "/public/show1.jpg"
  //   }
  let {
    tximg,
    sender,
    accepter,
    content,
    name,
    Time
  } = req.body
  talkModel.insertMany({
      tximg,
      sender,
      accepter,
      content,
      name,
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

router.post('/getinfo', (req, res) => {

  talkModel.find().then((data) => {
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
    Time,
    sender,
    accepter
  } = req.body
  talkModel.remove({
      Time,
      sender,
      accepter
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
  talkModel.updateOne({
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


router.post('/getsl', (req, res) => {
  let {
    accepter
  } = req.body
  talkModel.find({
      accepter
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

router.post('/updatetx', (req, res) => {
  let {
    account,
    tximg
  } = req.body
  talkModel.updateOne({
      account
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

router.post('/updatename', (req, res) => {
  let {
    sender,
    name
  } = req.body
  talkModel.updateMany({
      sender
    }, {
      name
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
