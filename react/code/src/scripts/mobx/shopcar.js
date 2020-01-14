import {observable, action, computed, autorun} from  "mobx"
import {axios} from "&"

class Shopcar {
    @observable carList = [] ;  // 购物车数据 
    // @observable carNum = 10;     // 购物车选中数量 
    // @observable carTotal = 18;   // 购物车总数量 

    @action getCarList = async (url )  => {
        const res = await axios.get(url);
        this.carList = res.data.result ;
    }

    @action delSelect = ()=> {
        axios.post("/react/delSelect").then(res=>{
            this.carList = this.carList.filter(item=>!item.checked);
        })
        
    }


    @action changeOneCount = (goodId,flag) =>{
        
        axios.post("/react/changeCount",{
            goodId,
            flag
        }).then(res=>{
            this.carList = this.carList.map((item)=>{
                if(item.goodId==goodId){
                    item.count += flag?1:-1;
                }
                return item;
            })
        })
    }

    @action changeOneCountNum = (goodId,count  )=>{
        axios.post("/react/changeCount",{
            goodId,
            count
        }).then(res=>{
            this.carList = this.carList.map((item)=>{
                if(item.goodId==goodId){
                    item.count  = count;
                }
                return item;
            })
        })
    }
    

    @action changeOneChecked = (checked,goodId)=>{
        axios.post("/react/changeChecked",{
            checked,
            goodId
        }).then(res=>{
            this.carList = this.carList.map((item)=>{
                if(item.goodId==goodId){
                    item.checked = checked
                }
                return item;
            })
        })
        
    }

    @action changeQuan = checked =>{
        axios.post("/react/changeChecked",{
            checked,
        }).then(res=>{
            this.quan = checked;
        })
        
    }

    @computed get carTotal(){
        var carTotal = 0;
        this.carList.forEach((item)=>{
            carTotal +=item.count;
        })
        return carTotal;
    }

    @computed get carNum(){
        var carNum = 0;
        this.carList.forEach((item)=>{
            if(item.checked){
                carNum += item.count;
            }
        })
        return carNum;
    }

    @computed get total(){
        var total = 0;
        this.carList.forEach((item)=>{
            if(item.checked){
                total += item.count * item.good.price;
            }
        })
        return total;
    }

    @computed get quan(){
        var quan = true;
        this.carList.forEach(item=>{
            if(!item.checked){
                quan = false;
            }
        })
        return quan;
    }

    set quan(newVal){
        this.carList = this.carList.map((item)=>{
            item.checked = newVal;
            return item;
        })
    }


}

export default new Shopcar()