/*
* http模块 不用解析TCP协议为一个http字符串
* 将http字符串解析成一个对象
* */

let http = require('http'); /* nodejs内置的http模块 */
let url = require('url');/* 用来解析url的模块 */
/*
* 创建服务器
* request --> 解析好的http
* response --> 返回给浏览器
* request.url --> 访问的路径
*
* */
http.createServer(function (request ,response) {
    console.log(request.url)/* /index.html?a=1&b=2 */
    let pathName = url.parse(request.url).pathname; /* /index.html  */
    let params = url.parse(request.url).query;/* a=1&b=2 只能接受get请求数据*/
    let paramsObj = url.parse(request.url , true).query;/* 参数用对象展示 {a:1} */

    /* 接受post请求数据 */
    /* 给request绑定事件,来监控post的数据请求 */
    request.on('data',function (data) {

    })

    console.log(paramsObj);
    console.log(params);
    response.writeHead(200);/* 填写响应头 */
    response.write(data);   /* 填写数据 */
}).listen(12306,'127.0.0.1');


/*
* 读取路径下的所有东西
*
*
* */

fs.readdirSync('web');/* 读取路径下的所有东西 */
