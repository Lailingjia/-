const express = require('express')
const router = express.Router()
const resModel = require('../model/resModel')

router.post('/add', (req, res) => {

  let {
    title,
    zzaccount,
    plname,
    plcontent,
    placcount,
    myaccount,
    mytximg,
    content,
    myname,
    Time
  } = req.body
  resModel.insertMany({
      title,
      zzaccount,
      plname,
      plcontent,
      placcount,
      myaccount,
      mytximg,
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

  resModel.find().then((data) => {
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
  resModel.remove({
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
  resModel.updateOne({
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


router.post('/getres', (req, res) => {
  let {
    title,
    zzaccount,
    placcount,
    plcontent
  } = req.body
  resModel.find({
      title,
      zzaccount,
      placcount,
      plcontent
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
  resModel.updateMany({
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
  resModel.updateMany({
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
  resModel.updateMany({
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

router.post('/getrescom', (req, res) => {
  let {
    placcount
  } = req.body
  resModel.find({
      placcount
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
  resModel.find()
    .then((list) => {
      count = list.length
      return resModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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
  resModel.find({
      $or: [{
        plname: {
          $regex: reg
        }
      }, {
        myname: {
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
  resModel.find({
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
    zzaccount,
    plname,
    placcount,
    plcontent,
    myname,
    myaccount,
    content
  } = req.body
  resModel.updateOne({
      _id
    }, {
      title,
      zzaccount,
      plname,
      placcount,
      plcontent,
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
