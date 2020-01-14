
import {observable, action, computed, autorun} from  "mobx"


class Demo {
    
    @observable count = 2020;  // state 
    @observable city = "北京..."
    @observable msg = "wuhan1910-daydayup"

    @action countAdd = ()=>{
        console.log(this.count);
        this.count++;
    }

    @action countDesc = payload=>{
        this.count-=payload;
    }

    @action changeCount = payload=>{
        this.count+=payload;
    }

    @action changeCity = payload=>{
        this.city = payload;
    }

    @action changeMsg = payload=>{
        this.msg = payload;
    }

    // 计算属性 
    @computed get newCount(){
        return this.count*2;
    }

}


export default new Demo();