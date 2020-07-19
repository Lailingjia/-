const express = require("express");
const router = express.Router();
const admin = require('../model/adminModel')

router.post('/reg', (req, res) => {
  let {
    account,
    password,
    name,
  } = req.body
  if (account || password) {
    admin.find({
      account
    }).then((data) => {
      if (data.length === 0) {
        return admin.insertMany({
          account: account,
          password: password,
          name: name,
        })
      } else {
        res.send({
          err: -3,
          msg: '用户名已存在'
        })
      }
    }).then(() => {
      res.send({
          err: 0,
          msg: '注册成功'
        })
        .catch((err) => {
          res.send({
            err: -2,
            msg: '注册失败'
          })
        })
    })
  } else {
    return res.send({
      err: -1,
      msg: '参数错误'
    })
  }
})


router.post('/login', (req, res) => {

  let {
    account,
    password
  } = req.body
  if (!account || !password) {
    return res.send({
      err: -1,
      msg: '参数错误'
    })
  }
  admin.find({
      account,
      password
    })
    .then((data) => {
      if (data.length > 0) {
        req.session.login = true
        req.session.name = account
        res.send({
          err: 0,
          msg: '登陆成功',
          data: req.body
        })
      } else {
        res.send({
          err: -2,
          msg: '用户名或密码不正确'
        })
      }
    })
    .catch((err) => {
      return res.send({
        err: -1,
        msg: '参数错误'
      })
    })
})



router.post('/getadmin', (req, res) => {

  let {
    account,
  } = req.body
  admin.find({
      account
    }).then((data) => {
      res.send({
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

router.post('/update', (req, res) => {
  let {
    account,
    name,

  } = req.body
  admin.updateOne({
      account
    }, {
      name,
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
  admin.find()
    .then((list) => {
      count = list.length
      return admin.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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
  admin.remove({
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
  admin.find({
      $or: [{
        account: {
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

router.post('/getinfoht', (req, res) => {
  let {
    _id
  } = req.body
  admin.find({
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
    password,
    name,
  } = req.body
  admin.updateOne({
      _id
    }, {
      account,
      password,
      name,
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
