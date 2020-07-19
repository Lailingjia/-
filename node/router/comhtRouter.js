const express = require('express')
const router = express.Router()
const comModel = require('../model/comModel')

router.post('/add', (req, res) => {

  let {
    mytximg,
    title,
    author,
    myaccount,
    zzaccount,
    content,
    myname,
    Time
  } = req.body
  comModel.insertMany({
      mytximg,
      title,
      author,
      myaccount,
      zzaccount,
      content,
      myname,
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

  comModel.find().then((data) => {
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
  comModel.remove({
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
  comModel.updateOne({
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


router.post('/getcom', (req, res) => {
  let {
    title,
    author
  } = req.body
  comModel.find({
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
    myaccount,
    myname,

  } = req.body
  comModel.updateMany({
      myaccount
    }, {
      myname,

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
    zzaccount,
    author,
  } = req.body
  comModel.updateMany({
      zzaccount
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

router.post('/updatetx', (req, res) => {
  let {
    myaccount,
    mytximg
  } = req.body
  comModel.updateMany({
      myaccount
    }, {
      mytximg
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



router.post('/getworkcom', (req, res) => {
  let {
    zzaccount
  } = req.body
  comModel.find({
      zzaccount
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

router.post('/getinfobypage', (req, res) => {
  let pagesize = req.body.pagesize || 2
  let page = req.body.page || 1
  let count = 0
  comModel.find()
    .then((list) => {
      count = list.length
      return comModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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
  comModel.find({
      $or: [{
        zzaccount: {
          $regex: reg
        }
      }, {
        title: {
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
  comModel.find({
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
    zzaccount,
    myname,
    myaccount,
    content
  } = req.body
  comModel.updateOne({
      _id
    }, {
      title,
      author,
      zzaccount,
      myname,
      myaccount,
      content
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
