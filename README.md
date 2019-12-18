# Node学习笔记
## 1. 后端开启服务器,该项目主要使用http模块创建服务
     (1) server.js 就是开启服务的模块
      
     (2)  http.createServer(function(){
      
           }) 在url访问的时候会执行该回调函数;
     (3) 在开启服务之前要先加载配置文件config.js
         通过config.js加载server.conf配置;
         
     (4) 加载controller用以返回非静态资源
     
     (5) 在执行createServer()回调函数进行拦截器操作
         符合条件的页面才能返回资源

## 2. filter文件夹主要用来拦截不符合页面的请求
        
## 3. controller中主要用来接受前端请求和返回请求结果
##    不做逻辑操作

## 4. service主要用来处理复杂逻辑;


## 5. dao层主要用来连接和处理数据库中数据

## 6. log为简单记录请求服务的日志
##    用于检查问题


## 7. page文件是前端文件夹

## 8. loder.js用以加载controller层
##    config.js用以加载配置文件server.conf
##    filterLoader.js用以加载filter拦截器
##    log.js用以写入日志到log文件中   


## 9. note文件夹为个人笔记


         
      
      
      
     