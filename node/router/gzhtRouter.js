const express = require('express')
const router = express.Router()
const gzModel = require('../model/gzModel')

router.post('/add', (req, res) => {

  let {
    account,
    author,
    message,
    tximg,
    name,
    zzaccount
  } = req.body
  gzModel.insertMany({
      account,
      author,
      message,
      tximg,
      name,
      zzaccount
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
    author,
    zzaccount,
  } = req.body
  gzModel.find({
      account,
      zzaccount,
      author,

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


router.post('/getgz', (req, res) => {
  let {
    name
  } = req.body
  gzModel.find({
      name
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
    zzaccount
  } = req.body
  gzModel.remove({
      zzaccount
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

router.post('/delete', (req, res) => {
  let {
    _id
  } = req.body
  gzModel.remove({
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

router.post('/updatetx', (req, res) => {
  let {
    account,
    tximg
  } = req.body
  gzModel.updateOne({
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
    account,
    name
  } = req.body
  gzModel.updateMany({
      account,
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

router.post('/updatezzname', (req, res) => {
  let {
    zzaccount,
    author
  } = req.body
  gzModel.updateMany({
      zzaccount,
    }, {
      author
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
  gzModel.find()
    .then((list) => {
      count = list.length
      return gzModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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
  gzModel.find({
      $or: [{
        author: {
          $regex: reg
        }
      }, {
        name: {
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
module.exports = router
