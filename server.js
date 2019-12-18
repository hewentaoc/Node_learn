/*
* 处理http请求
*
*/
let http = require('http');
let url = require('url');
let globalUrl = require('./config');/* 加载配置文件 */
let loaderMap = require('./loader');/* 加载controller层 */
let globalFilter = require('./filterLoader');/* 加载拦截的函数数组 */
let fs = require('fs');
let log = require('./log'); /* 加载日志文件 */
http.createServer(function (request , response) {/* 在浏览器请求url时候,调用该回调函数 */
    let path = url.parse(request.url).pathname; /* 请求路径 */
    console.log(path);
    /* 进行拦截 */
    for(let i = 0 ;i < globalFilter.length ;i++ ){
        let flag = globalFilter[i](request , response);
        if(flag){
            continue;
        }else{
            response.writeHead(302,{
                'location':'/index.html',
            })
            response.end();
            return ;
        }
    }
    let parm = url.parse(request.url,true).query; /* 请求数据 */
    let isStatic = isStaticRequest(path);
    log(path +"  "+"time" + ":" + new Date());
    if( isStatic ){/* 请求的是静态资源 */
         try{
             let staticData = fs.readFileSync(globalUrl.path + path);
             response.writeHead(200);
             response.write(staticData);
             response.end();/* 关闭浏览器和服务器的连接 */
         }catch (e) {
             response.writeHead(404);
             response.write("<html><body><h1>404 NotFound</h1></body></html>");
             response.end();/* 关闭浏览器和服务器的连接 */
         }
    }else{ /* 请求的数据库中的数据  请求动态资源 */
        if(loaderMap.get(path) != null){/* 有加载的路径 */
            try{
                loaderMap.get(path)(request,response);/* 调用回调函数,返回动态数据 */
            }catch (e) {/* 防止程序出现错误,使服务器停掉 */
                response.writeHead(500);
                response.write('<html><body><h1>500,服务器内部错误</h1></body></html>')
                response.end();/* 关闭浏览器和服务器的连接 */
            }
        }else{
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();/* 关闭浏览器和服务器的连接 */
        }
    }

}).listen(globalUrl.port,'127.0.0.1');
console.log()
log('服务开启' +"  "+"time" + ":" + new Date());
/*
* 判断请求类型的函数
*
* */
    function isStaticRequest(path){
        for(let i = 0 ;i < globalUrl.static_file_type.length ; i++){
            let elem = globalUrl.static_file_type[i];
            if(path.indexOf(elem) == path.length - elem.length){/* 用于匹配文件是否为静态文件 */
                return true; /* 配置成功即为静态文件 */
            }else{
                continue;
            }
        }
        return false;
    }


