/*
* 日志文件
* 记录日志在文件中
* 读写文件
*
* */
let fs = require('fs');

/*
* 写入内容到文件中
* writeFile 是异步写入
* 如果两件事情没有依赖关系,尽量用异步
* flag 默认为w,每次写入文件都会覆盖文件中的值
* flag flag == a是以追加模式写入文件
*
* */
fs.writeFile('/path','text' +"\n",{flag:'a'},function () {

});
// === fs.appendFile() 异步追加函数,flag默认值就为a

/*
* 写入内容到文件中
* writeFileSync 是同步写入
* 有先后依赖关系的,就用同步
* */
fs.writeFileSync('/path','text');



/*
* 异步的读 readFile
* 不存在返回结果
* data才是异步读取的返回结果
*
* */


 fs.readFile('/path',function ( err , data ) {

 })