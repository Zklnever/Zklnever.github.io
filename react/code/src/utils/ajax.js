


// let pro = new Promise(function(resolve,reject){
//     if(Math.random()>0.5){
//         resolve()
//     }else{
//         reject()
//     }
// })

// pro.then(success=>{

// }).catch(err=>{

// })

import {stringify} from "querystring"; 
export const http = {
    get(url,{params}){
        const promise = new Promise(function(resolve,reject){
            const hanlder = function(){
                if(this.readyState!==4){  // 1 2 3 4  
                    return "";
                }
                if(this.status==200){  // 100  200  300  400 500 http状态码 
                    resolve({data:this.response})
                }else{
                    reject(new Error(this.statusText))
                }
            }
            var client = new XMLHttpRequest();
            params = stringify(params);
            console.log(params);
            client.open("GET",url+"?"+params);
            client.responseType = "json";
            client.setRequestHeader("Accept","application/json");   // headers
            client.onreadystatechange = hanlder;
            client.send();
        })

        return promise;
    },
    post(){
        
    }
}

