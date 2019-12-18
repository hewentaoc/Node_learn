    /*
    * 用来接受、发送动态资源请求
    *
    * */
    let studentService = require('../service/studentService');
    let url = require('url');
    let path = new Map();
    function getData(request ,response) {
        studentService.getAllStudent(function(result){
            response.writeHead(200);
            response.write(JSON.stringify(result));
            response.end();
        })
    }
    path.set('/getData',getData);

    function login(request ,response) {
        let params = url.parse(request.url ,true).query;
        studentService.getStudentByStuNum(params.username , function (result) {
            let res = '';
            if(result == null || result.length == 0){
                res = "Fail";
                response.writeHead(302,{
                    'location' : "/error.html",
                })
            }else{
                if(params.pwd == result[0].pwd){
                    res = "OK";
                    response.writeHead(302,{/* 后端设置cookie进行拦截和页面跳转 */
                        'location' : "/main.html",
                        'Set-Cookie':'id=' + result[0].id,
                    })
                }else{
                    res = "Fail";
                    response.writeHead(302,{
                        'location' : "/error.html",
                    })
                }
            }
            // response.writeHead(200);
            // response.write(res);
            response.end();
        });
    }
    path.set('/login', login);
    module.exports.path = path;
