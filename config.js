/*
* 处理配置文件
* static_file_type 配置什么类型返回静态文件
* */
let fs = require('fs');
let fileData = fs.readFileSync(__dirname +'\\'+'server.conf').toString().split('\r\n');/* 读配置文件 */
let globalUrl = {};
fileData.forEach(function(ele,index,self){/* 遍历配置文件到globalUrl对象 */
     let temp = ele.split("=");
     if(temp.length >=2 ){
         globalUrl[temp[0]] = temp[1];
     }
})
if(globalUrl.static_file_type == null){
    throw new Error('静态文件的类型没定义');
}else{
    globalUrl.static_file_type = globalUrl.static_file_type.split('|')
}
module.exports = globalUrl; /* 导出路径配置文件 */
