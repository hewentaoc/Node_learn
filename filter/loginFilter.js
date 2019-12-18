/*
* 登录的拦截器
*
* */
    let url = require('url');
    let globalUrl = require('../config');
    function loginFilter(request , response) {
        let path = url.parse(request.url).pathname;
        if ( path == '/index.html' || path == '/login' || isStaticRequest(path)) {
            console.log('放行',path);
            return true;
        }
        if( request.headers.cookie ) {/* 判断cookie是否存在 */
            let arr = request.headers.cookie.split(";");
            for( let i = 0 ; i <arr.length ; i++){
                let temp = arr[i].split("=")[0].trim();
                if(temp == "id"){
                    return true;
                }
            }
        }
        response.writeHead(302,{
            "location":'/index.html',
        })
        console.log('拦截',path);
        return false;
    }
    function isStaticRequest(path){
        for(let i = 0 ;i < globalUrl.static_file_type.length ; i++){
            let elem = globalUrl.static_file_type[i];
            if(elem == ".html"){
                continue;
            }
            if(path.indexOf(elem) == path.length - elem.length){/* 用于匹配文件是否为静态文件 */
                return true; /* 配置成功即为静态文件 */
            }else{
                continue;
            }
        }
        return false;
    }
    module.exports = loginFilter;