
import {axios} from "&"

export function changeCount(payload){
    return {
        type:"changeCount",
        payload
    }
}

export function changeCity(payload){
    return {
        type:"changeCity",
        payload
    }
}


export async function getBanner({url,cb}){
    const res = await axios.get(url);
    cb()
    return {
        type:"getBanner",
        payload:res.data.result
    }
}

export async function getMobile({url}){
    const res = await axios.post(url);
    return {
        type:"changeUser",
        payload:{
            mobile:res.data.result
        }
    }
} 

export const changeUser = (payload)=>{
    return {
        type:"changeUser",
        payload
    }
}


export async function getGoodList({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:"getGoodList",
        payload:res.data.result
    }
} 

export async function getGoodType({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:"getGoodType",
        payload:res.data.result
    }
} 

export function changeGoodListReverse(){
    return {
        type:"changeGoodListReverse",
    }
}


export async function getSearchList({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:"getSearchList",
        payload:res.data.result
    }
} 


export function changeSearchListReverse(){
    return {
        type:"changeSearchListReverse",
    }
}
