/*
* 处理日志
* 写日志
*
* */

    let fs = require('fs');
    let globalConfig = require('./config');
    let logPath = globalConfig.log_path + globalConfig.log_name;

    function log(data) {
        fs.writeFile(logPath,data + "\n",{flag:"a"},function () {

        })
    }
    module.exports = log;
