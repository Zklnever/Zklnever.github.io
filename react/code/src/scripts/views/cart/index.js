import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import shopcar from  "~/mobx/shopcar"
import {observer} from "mobx-react"

import {
    NoticeBar,
    Checkbox,
    Button
} from "antd-mobile"
console.log(shopcar)
@observer
class Cart extends Component{

    componentDidMount(){
        shopcar.getCarList("/react/getCarList");
    }

    checkOne=e=>{
        console.log(e);
        shopcar.changeOneChecked(e.target.checked,e.target.goodId);
    }

    checkAll=(e)=>{
        console.log(e.target.checked);
        // shopcar.quan =   e.target.checked;
        shopcar.changeQuan(e.target.checked);
    }

    reduce=(goodId,count)=>{
        if(count>1){
            shopcar.changeOneCount(goodId,false);
        }
    }

    add=(goodId,count)=>{
        
        shopcar.changeOneCount(goodId,true);
    }

    changeCount=(goodId,v)=>{
        console.log(v.target.value);
        if(v.target.value>1){
            shopcar.changeOneCountNum(goodId,v.target.value*1)
        }
    }

    delSelect=()=>{
        shopcar.delSelect();
    }

    render(){
        const {
            carList,
            carNum,
            total,
            quan
        } = shopcar;
        return (
            <div>
                <Head title="购物车" ></Head>
                <div style={{ display: sessionStorage.token ? 'none' : 'block' }} >
                    {/* <Button type="primary" onClick={()=>userInfo.countDesc(6)}> 你尚未登陆,请马上登录 </Button> */}
                    <Button type="primary" > 你尚未登陆,请马上登录  </Button>
                </div>
                <div style={{ display: !sessionStorage.token ? 'none' : 'block' }}>
                    <div style={{ display: carList.length > 0 ? 'none' : 'block' }}>
                        <h2> 你 还买购买任何商品,购物车空空如也 , 请马上去购买 </h2>
                    </div>

                    <div style={{ display: !carList.length > 0 ? 'none' : 'block' }}  >
                        <div id="carDiv">
                            <div id="tbody">
                                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                                    即日-01.26，购「布莱克/栗蓉暗香/松仁淡奶/核桃斯诺/布朗尼」，实付满200元，配送完成后赠21cake「肉桂卷」兑换券。
                                </NoticeBar>
                                {
                                    carList && carList.map((i, index) => {
                                        return (
                                            i.good&&<ul className="tr" key={index} id={i._id}>
                                                <li style={{ width: "11%" }}>
                                                    <Checkbox 
                                                    checked={i.checked} 
                                                    goodId={i.goodId} 
                                                    onChange={this.checkOne} >
                                                    </Checkbox>
                                                </li>
                                                <li style={{ width: "24%" }}><img src={i.good.img} /></li>
                                                <li style={{ width: "38%" }}>
                                                    <p style={{ lineHeight: "18px", marginTop: '36px' }}>{i.good.name.slice(0, 6)}</p>
                                                    <p style={{ lineHeight: "18px" }}>￥{i.good.price}</p>
                                                </li>
                                                <li style={{ width: "26%" }}>
                                                    <span style={{ fontSize: '22px', marginRight: '3px' }} onClick={() => this.reduce(i.goodId, i.count)}>-</span>
                                                    <input goodsid={i.goodId} type="text" value={i.count} onChange={(v) => { this.changeCount(i.goodId, v) }} style={{ width: "54px", fontSize: '16px', textAlign: 'center', background: 'none', border: '0' }} />
                                                    <span style={{ fontSize: '22px' }} onClick={() => this.add(i.goodId, i.count)}>+</span>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="carFoot">
                                <Checkbox style={{ width: '4%', float: 'left', marginLeft: '2%', lineHeight: '50px', }} onClick={this.checkAll}  checked={quan} ></Checkbox>
                                <p onClick={this.delSelect} style={{ width: '28%', lineHeight: '50px', fontSize: '14px', color: "red", marginLeft: '4%' }} >删除选中</p>
                                <p style={{ width: '36%', lineHeight: '50px',color:"#fff" }}>
                                    商品总价:<span style={{ width: '100px',color:"red" }}> {total} </span>
                                </p>
                                <p style={{ backgroundColor: '#5c3715', width: "26%", fontSize: '20px', lineHeight: '50px', textAlign: 'center', color: "#fff", letterSpacing: '2px' }} >下单 {carNum} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;