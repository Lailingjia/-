const express = require("express");
const app = express();
const db = require("./db")
const path = require('path')
const bodypaser = require("body-parser")
const cookieparse = require('cookie-parser')
const session = require('express-session')

app.use(bodypaser.urlencoded({
  extended: false
}))
app.use(bodypaser.json())

app.use(session({
  secret: 'addmis',
  cookie: {
    maxAge: 60 * 1000 * 60 * 24
  },
  resave: true,
  saveUninitialized: false,
}));



const userRouter = require("./router/userRouter")
app.use('/user', userRouter)
const userhtRouter = require('./router/userhtRouter')
app.use('/userht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, userhtRouter)


const fileRouter = require("./router/fileRouter")
app.use('/file', fileRouter)

const showRouter = require("./router/showRouter")
app.use('/show', showRouter)
const showhtRouter = require('./router/showhtRouter')
app.use('/showht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, showhtRouter)


const remRouter = require("./router/remRouter")
app.use('/rem', remRouter)
const remhtRouter = require('./router/remhtRouter')
app.use('/remht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, remhtRouter)

const proRouter = require("./router/proRouter")
app.use('/pro', proRouter)
const prohtRouter = require('./router/prohtRouter')
app.use('/proht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, prohtRouter)

const actRouter = require("./router/actRouter")
app.use('/act', actRouter)
const acthtRouter = require('./router/acthtRouter')
app.use('/actht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, acthtRouter)

const soldRouter = require("./router/soldRouter")
app.use('/sold', soldRouter)
const soldhtRouter = require('./router/soldhtRouter')
app.use('/soldht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, soldhtRouter)


const zanRouter = require("./router/zanRouter")
app.use('/zan', zanRouter)
const zanhtRouter = require('./router/zanhtRouter')
app.use('/zanht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, zanhtRouter)

const xinxiRouter = require("./router/xinxiRouter")
app.use('/xinxi', xinxiRouter)
const xinxihtRouter = require('./router/xinxihtRouter')
app.use('/xinxiht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, xinxihtRouter)

const talkRouter = require("./router/talkRouter")
app.use('/talk', talkRouter)
const gzRouter = require("./router/gzRouter")
app.use('/gz', gzRouter)
const gzhtRouter = require('./router/gzhtRouter')
app.use('/gzht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, gzhtRouter)
const comRouter = require("./router/comRouter")
app.use('/com', comRouter)
const comhtRouter = require('./router/comhtRouter')
app.use('/comht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, comhtRouter)
const resRouter = require("./router/resRouter")
app.use('/res', resRouter)
const reshtRouter = require('./router/reshtRouter')
app.use('/resht', (req, res, next) => {
  console.log(req.body)
  console.log(req.session)
  if (req.session.login) {
    next()
  } else {
    res.send({
      err: -999,
      msg: '请先登录'
    })
  }
}, reshtRouter)
const adminRouter = require("./router/adminRouter")
app.use('/admin', adminRouter)


app.use('/public', express.static(path.join(__dirname, './static')))




app.use('/api/*', function (req, res, next) {
  // 设置请求头为允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 设置服务器支持的所有头信息字段
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With, yourHeaderFeild");
  // 设置服务器支持的所有跨域请求的方法
  res.header("Access-Control-Allow-Methods", "POST,GET");
  // next()方法表示进入下一个路由
  next();
});




app.listen(3000, () => {
  console.log("server running...")
})
