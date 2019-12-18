let dbutil = require('./dbutil');


function getAllStudent(success) {
    let querySql = 'select * from student;';
    let connection = dbutil.createConnection();
    connection.connect();/* 连接数据库 */;
    connection.query(querySql,function (error ,result) {
        if(result){
            success(result);
        }else{
            console.log(error);
        }
    })
    connection.end(); /* 关闭数据库连接 再次调用该函数就会报错 */
}

function getStudentByStuNum (stu_num , success){
    let querySql = "select * from student where stu_num = ?";
    let connection = dbutil.createConnection();
    connection.connect();/* 连接数据库 */;
    connection.query(querySql , stu_num , function (error , result) {
            if(result){
                success(result);
            }
    })
    connection.end(); /* 关闭数据库连接 */
}


module.exports = {
    getAllStudent,
    getStudentByStuNum,
}