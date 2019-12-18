/*
* 进行数据请求
*
* */
   let obutton = document.getElementById('submit');
   let ajax = {
        login: function () {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        // rederPage(JSON.parse(xhr.responseText))
                        rederPage(xhr.responseText);
                    }
                }
            }
            /* get进行数据请求 */
            let username = document.getElementById('username').value;
            let pwd = document.getElementById('pwd').value;
            let params = "username="+username+"&pwd="+pwd;
            xhr.open('get','login?'+params,true);
            xhr.send();

            /* post进行数据请求 */
            // xhr.open("post")
            // xhr.send(params)
        },
   }

    obutton.onclick = function () {
        ajax.login();
    }


    
    function rederPage(result) {
         // if(result == "OK"){
         //     alert('密码正确');
         // }else{
         //     alert('密码错误你好');
         // }
        // let oul = document.getElementById("list");
        // let str = '';
        // for (let i = 0 ;i<result.length ; i++){
        //     str += '<li>'+ result[i].name+'</li>';
        // }
        // oul.innerHTML = str;
    }
