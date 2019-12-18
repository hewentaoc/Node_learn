/*
* npm 下载mysql
*
* */
let mysql = require('mysql');
/*
* 数据库创建连接
*
* */
let connection = mysql.createConnection({
    host:"127.0.0.1",/* 连接哪台机器 */
    port: "3306",/* 端口 */
    user: "root",/* 用户名 */
    password: "123456",/* 密码 */
    database:"school"
})

let querySql = "select * from student;";/* 查询语句 */

connection.connect();/* 连接数据库*/

/* 查询数据库 */
connection.query(querySql, function (error , result) {
    if(error == null){
        // console.log(result);
    }else{

    }
})

let queryClass = "select * from student where class = ?";/* 查询语句 ? 代表此处要传参数 */
/* queryClass后面位置添加参数
   传递多个参数 queryClass, '3',
*  传递多个参数 queryClass ,['3','18']
*
* */
connection.query(queryClass,'3',function(error ,result){
    if(error == null){
        console.log(result);
    }else{

    }
})



connection.end(); /* 关闭数据库 */
