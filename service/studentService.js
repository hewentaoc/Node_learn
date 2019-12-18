let studentDao = require('../dao/studentDao');

function getAllStudent(success){
    studentDao.getAllStudent(success);
}

function getStudentByStuNum (stu_num , success) {
    studentDao.getStudentByStuNum(stu_num , success);
}

module.exports = {
    getAllStudent,
    getStudentByStuNum
}