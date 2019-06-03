//先引入 axios 
import axios from 'axios';
//创建一个 axios 的实例对象
const http = axios.create();
//设置 http 的默认选项
//默认 url 的前缀 ，基准url地址
http.defaults.baseURL = "http://localhost:3000/";
//默认请求数据的时间
http.defaults.timeout = 10000
//请求拦截

//响应拦截
http.interceptors.response.use(response => {
  return response.data
})
//暴露出 http
export default http;

