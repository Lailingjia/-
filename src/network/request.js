import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000

  })
  return instance(config)
  //   const instance = axios.create({
  //     baseURL: "",
  //     timeout: 5000
  //   })


  //   instance(config)
  //     .then(res => {
  //       Console.log(res);
  //       success(res);
  //     })
  //     .catch(err => {
  //       Console.log(err);
  //       failure(err)
  //     })
}


//使用
// import {
//   request
// }
// from './request.js'

// request
//   ({
//     url: ""
//   }, res => {
//     Console.log(res);
//   }, err => {
//     console.log(err);
//   })
