/*
* 加载动态资源
* 加载controller文件夹
* */
let fs = require('fs');
let globalUrl = require('./config');
let globalMap = new Map();
let controllerFile = fs.readdirSync(globalUrl.controller_path);
  for(let i = 0 ; i< controllerFile.length ; i++){
      let temp = require('./'+ globalUrl.controller_path + controllerFile[i]);
      if(temp.path){
          for(let [k,v] of temp.path){
              if(globalMap.get(k) == null){
                  globalMap.set(k,v);
              }else{
                  throw new Error('url异常,url'+k);
              }
          }
      }
  }
  module.exports = globalMap;