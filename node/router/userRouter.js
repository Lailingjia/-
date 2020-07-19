const express = require("express");
const router = express.Router();
const user = require('../model/userModel')

router.post('/reg', (req, res) => {

  let {
    account,
    password,
    name,
    phone,
    acctype,
    tximg,
    intro
  } = req.body
  if (account && password && name && phone) {
    user.find({
      $or: [{
        account
      }, {
        name
      }]
    }).then((data) => {
      if (data.length === 0) {
        return user.insertMany({
          account: account,
          password: password,
          name: name,
          phone: phone,
          acctype: acctype,
          tximg: tximg,
          intro: intro
        })
      } else {
        res.send({
          err: -3,
          msg: '用户名或昵称已存在'
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
  user.find({
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

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.send({
    err: 0,
    msg: '已退出'
  })
})


router.post('/getinfobypage', (req, res) => {
  let pagesize = req.body.pagesize || 2
  let page = req.body.page || 1
  let count = 0
  user.find()
    .then((list) => {
      count = list.length
      return user.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
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
  user.find({
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

router.post('/del', (req, res) => {
  let {
    _id
  } = req.body
  user.remove({
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


router.post('/getinfoht', (req, res) => {
  let {
    _id
  } = req.body
  user.find({
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
    acctype,
    intro,
    tximg
  } = req.body
  user.updateOne({
      _id
    }, {
      account,
      password,
      name,
      acctype,
      intro,
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

router.post('/getuser', (req, res) => {

  let {
    account,
  } = req.body
  user.find({
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
  user.updateOne({
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


router.post('/updatetx', (req, res) => {
  let {
    account,
    name,
    tximg
  } = req.body
  user.updateOne({
      account
    }, {
      name,
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


router.post('/updateintro', (req, res) => {
  let {
    account,
    intro
  } = req.body
  user.updateOne({
      account
    }, {
      intro
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


router.post('/updatepass', (req, res) => {
  let {
    account,
    password
  } = req.body
  user.updateOne({
      account
    }, {
      password
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


router.post('/getxx', (req, res) => {

  let {
    name,
  } = req.body
  user.find({
      name
    }).then((data) => {
      res.send({
        list: data,

      })
    })
    .catch((err) => {
      res.send({
        err: -1,
        msg: '查询失败'
      })
    })
})


router.post('/getzz', (req, res) => {

  user.find().limit(6).then((data) => {
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


router.post('/getdis', (req, res) => {

  user.find().limit(4).then((data) => {
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


router.post('/getall', (req, res) => {

  user.find().then((data) => {
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

router.post('/updatetype', (req, res) => {
  let {
    account,
    acctype
  } = req.body
  user.updateOne({
      account
    }, {
      acctype
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
