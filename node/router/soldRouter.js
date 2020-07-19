const express = require('express')
const router = express.Router()
const soldModel = require('../model/soldModel')



router.post('/add', (req, res) => {

  let {
    title,
    img,
    price,
    author,
    account,
    tximg,
    jytype,
    propty,
    tool,
    type,
    Time,
  } = req.body
  soldModel.insertMany({
      title,
      img,
      price,
      author,
      account,
      tximg,
      jytype,
      propty,
      tool,
      type,
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

  soldModel.find().limit(12).then((data) => {
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


router.post('/getmes', (req, res) => {
  let {
    title,
    price
  } = req.body
  soldModel.find({
      title,
      price
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

router.post('/getdata', (req, res) => {
  let {
    title,
    author
  } = req.body
  soldModel.find({
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

router.post('/updatename', (req, res) => {
  let {
    account,
    author
  } = req.body
  soldModel.updateMany({
      account
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

router.post('/updatetx', (req, res) => {
  let {
    account,
    tximg
  } = req.body
  soldModel.updateOne({
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
router.post('/getinfobypage', (req, res) => {
  let pagesize = req.body.pagesize || 2
  let page = req.body.page || 1
  let count = 0
  soldModel.find()
    .then((list) => {
      count = list.length
      return soldModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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

router.post('/del', (req, res) => {
  let {
    _id
  } = req.body
  soldModel.remove({
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

router.post('/getinfobykw', (req, res) => {
  let {
    kw
  } = req.body
  let reg = new RegExp(kw)
  soldModel.find({
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

router.post('/getinfoht', (req, res) => {
  let {
    _id
  } = req.body
  soldModel.find({
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
    title,
    author,
    price,
    jytype,
    propty,
    tool,
    type
  } = req.body
  soldModel.updateOne({
      _id
    }, {
      title,
      author,
      price,
      jytype,
      propty,
      tool,
      type
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


router.post('/getother', (req, res) => {
  let {
    author
  } = req.body
  soldModel.find({
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


router.post('/delet', (req, res) => {
  let {
    title
  } = req.body
  soldModel.remove({
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
module.exports = router
