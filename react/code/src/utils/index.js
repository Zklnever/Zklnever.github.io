import url from "url";
import {createHashHistory} from "history"; 

export {msg} from "./msg"

export {config} from "./config"

export const commonCss = {
    all:{
        margin:0,
        padding:0
    },
    three:{
        backgroundColor:"pink",
        boxShadow:"0 0 0 10px blue"
    }
}


export const commonJS = {
    move(){
        console.log("这是 鼠标滑动事件")
    },
    touch(){
        console.log("this is touch event 触摸事件 ")
    }
}


export {axios,baseURL} from "./axios"



export function GetQuery(search){

    return url.parse(search,true).query;
    // constructor(search){
    //     this.search = search;
    // }

}



// history = this.props.history 
export const history = new createHashHistory();