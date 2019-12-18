/*
* 加载拦截器
*
* */

 let fs = require('fs');
 let url = require('url');
 let globalConfig = require('./config');
 let file = fs.readdirSync(globalConfig.filter_path);
 let globalFilter = [];

 for(let i = 0 ;i < file.length ; i++){
     let temp = require("./"+globalConfig.filter_path + file[i]);
     if(temp) {
         globalFilter.push(temp);
     }else{
         continue;
     }
 }
 module.exports = globalFilter;