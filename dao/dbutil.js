/*
* DAO层
* 用以连接数据库
*
* */

let mysql =require('mysql');

function createConnection (){
    let connection = mysql.createConnection({/* 创建连接 */
        host:'127.0.0.1',
        post: '3306',
        user: 'root',
        password: '123456',
        database: 'school',
    });
    return connection;
}
module.exports.createConnection = createConnection;
