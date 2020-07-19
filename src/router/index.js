import Vue from 'vue'
import Router from 'vue-router'
const Topbar = () => import('@/components/TopBar/Topbar')
const Top = () => import('@/components/TopBar/Top')
const mysyb = () => import('@/components/TopBar/mysyb')
const downlist = () => import('@/components/TopBar/downlist')
const navbar = () => import('@/components/TopBar/navbar')
const lunbo = () => import('@/components/lunbo')
const index = () => import('@/view/index')
const show = () => import('@/components/show')
const ZPtuijian = () => import('@/components/ZPtuijian')
const ZZtuijian = () => import('@/components/ZZtuijian')
const SYtuijian = () => import('@/components/SYtuijian')
const ZJtuijian = () => import('@/components/ZJtuijian')
const middlelun = () => import('@/components/middlelun')
const Findmon = () => import('@/components/Findmon')
const sold = () => import('@/components/sold')
const hd = () => import('@/components/hd')
const recommand = () => import('@/view/recommand')
const recmand = () => import('@/components/recommand/recmand')
const betselect = () => import('@/components/recommand/betselect')
const display = () => import('@/components/author/display')
const item = () => import('@/components/author/item')

const author = () => import('@/view/author')
const data = () => import('@/view/data')
const bar = () => import('@/components/person/bar')
const up = () => import('@/components/person/up')
const message = () => import('@/components/person/message')
const work = () => import('@/components/person/work')
const iwork = () => import('@/components/person/iwork')
const isold = () => import('@/components/person/isold')
const mywork = () => import('@/view/mywork')
const mysold = () => import('@/view/mysold')
const myatta = () => import('@/view/myatta')
const myzan = () => import('@/view/myzan')
const atta = () => import('@/components/person/atta')
const mzan = () => import('@/components/person/mzan')
const addwork = () => import('@/view/addwork')
const upload = () => import('@/components/upload/upload')
const upsold = () => import('@/components/upload/upsold')
const setdata = () => import('@/view/setdata')
const set = () => import('@/components/person/set')
const save = () => import('@/components/person/save')
const setsave = () => import('@/view/setsave')
const sys = () => import('@/components/message/sys')
const mail = () => import('@/components/message/mail')
const aboutcom = () => import('@/components/message/aboutcom')
const combar = () => import('@/components/message/combar')
const plres = () => import('@/components/message/plres')

const xitong = () => import('@/view/xitong')
const mymail = () => import('@/view/mymail')
const project = () => import('@/components/work/project')
const pro = () => import('@/view/pro')
const xinxi = () => import('@/components/detail/xinxi')
const soldmes = () => import('@/components/detail/soldmes')
const zan = () => import('@/components/detail/zan')
const imain = () => import('@/components/detail/imain')
const smain = () => import('@/components/detail/smain')
const countzan = () => import('@/components/detail/countzan')
const comment = () => import('@/components/detail/comment')
const comlist = () => import('@/components/detail/comlist')
const othersold = () => import('@/components/detail/othersold')


const talk = () => import('@/components/detail/talk')
const detail = () => import('@/view/detail')
const solddetail = () => import('@/view/solddetail')
const reg = () => import('@/components/reg/reg')
const register = () => import('@/view/register')
const log = () => import('@/components/login/log')
const login = () => import('@/view/login')
const perdata = () => import('@/components/perdetail/perdata')
const perwork = () => import('@/components/perdetail/perwork')
const perdetail = () => import('@/view/perdetail')
const updet = () => import('@/components/person/updet')
const updetail = () => import('@/view/updetail')
const talkto = () => import('@/view/talkto')
const commore = () => import('@/view/commore')
const comtalk = () => import('@/view/comtalk')
const workcom = () => import('@/view/workcom')
const plcom = () => import('@/view/plcom')
const exploer = () => import('@/view/exploer')
const addsold = () => import('@/view/addsold')
// const test3 = () => import('@/components/test3')



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/lunbo',
      name: 'lunbo',
      component: lunbo,
    },
    {
      path: '/Topbar',
      name: 'Topbar',
      component: Topbar,

    },
    {
      path: '/Top',
      name: 'Top',
      component: Top,

    },
    {
      path: '/mysyb',
      name: 'mysyb',
      component: mysyb,

    },
    {
      path: '/downlist',
      name: 'downlist',
      component: downlist,

    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar,

    },

    {
      path: '/show',
      name: 'show',
      component: show,

    },
    {
      path: '/ZPtuijian',
      name: 'ZPtuijian',
      component: ZPtuijian,

    },
    {
      path: '/ZZtuijian',
      name: 'ZZtuijian',
      component: ZZtuijian,

    },
    {
      path: '/SYtuijian',
      name: 'SYtuijian',
      component: SYtuijian,

    },
    {
      path: '/ZJtuijian',
      name: 'ZJtuijian',
      component: ZJtuijian,

    },
    {
      path: '/middlelun',
      name: 'middlelun',
      component: middlelun,

    },
    {
      path: '/Findmon',
      name: 'Findmon',
      component: Findmon,

    },
    {
      path: '/sold',
      name: 'sold',
      component: sold,

    },
    {
      path: '/hd',
      name: 'hd',
      component: hd,

    },
    {
      path: '/recommand',
      name: 'recommand',
      component: recommand,

    },
    {
      path: '/recmand',
      name: 'recmand',
      component: recmand,

    },
    {
      path: '/betselect',
      name: 'betselect',
      component: betselect,

    },
    {
      path: '/display',
      name: 'display',
      component: display,

    },
    {
      path: '/author',
      name: 'author',
      component: author,

    },
    {
      path: '/item',
      name: 'item',
      component: item,

    },
    {
      path: '/data',
      name: 'data',
      component: data,

    },
    {
      path: '/bar',
      name: 'bar',
      component: bar,

    },
    {
      path: '/up',
      name: 'up',
      component: up,

    },
    {
      path: '/message',
      name: 'message',
      component: message,

    },
    {
      path: '/work',
      name: 'work',
      component: work,

    },
    {
      path: '/iwork',
      name: 'iwork',
      component: iwork,

    },
    {
      path: '/mywork',
      name: 'mywork',
      component: mywork,

    },
    {
      path: '/myatta',
      name: 'myatta',
      component: myatta,

    },
    {
      path: '/atta',
      name: 'atta',
      component: atta,

    },
    {
      path: '/addwork',
      name: 'addwork',
      component: addwork,

    },
    {
      path: '/upload',
      name: 'upload',
      component: upload,

    },
    {
      path: '/setdata',
      name: 'setdata',
      component: setdata,

    },
    {
      path: '/set',
      name: 'set',
      component: set,

    },
    {
      path: '/setsave',
      name: 'setsave',
      component: setsave,

    },
    {
      path: '/save',
      name: 'save',
      component: save,

    },
    {
      path: '/sys',
      name: 'sys',
      component: sys,

    },
    {
      path: '/xitong',
      name: 'xitong',
      component: xitong,

    },
    {
      path: '/project',
      name: 'project',
      component: project,

    },
    {
      path: '/pro',
      name: 'pro',
      component: pro,

    },
    {
      path: '/xinxi',
      name: 'xinxi',
      component: xinxi,

    },
    {
      path: '/zan',
      name: 'zan',
      component: zan,

    },
    {
      path: '/imain',
      name: 'imain',
      component: imain,

    },
    {
      path: '/smain',
      name: 'smain',
      component: smain,

    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,

    },
    {
      path: '/countzan',
      name: 'countzan',
      component: countzan,

    },
    {
      path: '/comment',
      name: 'comment',
      component: comment,

    },
    {
      path: '/mail',
      name: 'mail',
      component: mail,

    },
    {
      path: '/mymail',
      name: 'mymail',
      component: mymail,

    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,

    },
    {
      path: '/log',
      name: 'log',
      component: log,

    },
    {
      path: '/register',
      name: 'register',
      component: register,

    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },
    {
      path: '/perdata',
      name: 'perdata',
      component: perdata,

    },
    {
      path: '/perwork',
      name: 'perwork',
      component: perwork,

    },
    {
      path: '/perdetail',
      name: 'perdetail',
      component: perdetail,

    },
    {
      path: '/soldmes',
      name: 'soldmes',
      component: soldmes,

    },
    {
      path: '/solddetail',
      name: 'solddetail',
      component: solddetail,

    },
    {
      path: '/updet',
      name: 'updet',
      component: updet,

    },
    {
      path: '/updetail',
      name: 'updetail',
      component: updetail,

    },
    {
      path: '/talk',
      name: 'talk',
      component: talk,

    },
    {
      path: '/talkto',
      name: 'talkto',
      component: talkto,

    },
    {
      path: '/comlist',
      name: 'comlist',
      component: comlist,

    },
    {
      path: '/commore',
      name: 'commore',
      component: commore,

    },
    {
      path: '/comtalk',
      name: 'comtalk',
      component: comtalk,

    },
    {
      path: '/combar',
      name: 'combar',
      component: combar,

    },
    {
      path: '/aboutcom',
      name: 'aboutcom',
      component: aboutcom,

    },
    {
      path: '/workcom',
      name: 'workcom',
      component: workcom,

    },
    {
      path: '/plres',
      name: 'plres',
      component: plres,

    },
    {
      path: '/plcom',
      name: 'plcom',
      component: plcom,

    },
    {
      path: '/exploer',
      name: 'exploer',
      component: exploer,

    },
    {
      path: '/upsold',
      name: 'upsold',
      component: upsold,

    },
    {
      path: '/addsold',
      name: 'addsold',
      component: addsold,

    },
    {
      path: '/othersold',
      name: 'othersold',
      component: othersold,

    },
    {
      path: '/isold',
      name: 'isold',
      component: isold,

    },
    {
      path: '/mysold',
      name: 'mysold',
      component: mysold,

    },
    {
      path: '/myzan',
      name: 'myzan',
      component: myzan,

    },
    {
      path: '/mzan',
      name: 'mzan',
      component: mzan,

    },
    // {
    //   path: '/test3/:id',
    //   name: 'test3',
    //   component: test3,
    //   meta: {
    //     title: 'test3'
    //   }
    // },

  ],
  mode: 'history'
})
