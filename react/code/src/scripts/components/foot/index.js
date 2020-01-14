
import "./index.scss";
import React,{Component} from "react";
import {
    NavLink
}  from "react-router-dom"
import {Badge} from "antd-mobile"

export const foots = [
    {txt:"首页",path:"/main/home",name:"home",icon:"icon-home"},
    {txt:"商品",path:"/main/classify",name:"classify",icon:"icon-goodsfill"},
    {txt:"购物车",path:"/main/cart",name:"cart",icon:"icon-shop_car"},
    {txt:"我",path:"/main/mine",name:"mine",icon:"icon-minefill"}
];


export class Foot extends Component{
    
    state = {
        foots,
        active:2
    }

    componentDidMount(){
        console.log("mount");
        this.setState({
            active:localStorage.active
        })
    }

    handleChangeActive=(index)=>{
        console.log(index);
        localStorage.active = index;
    }

    render(){
        const {
            active
        } = this.state;
        console.log(this.state);
        return (
           <footer>
               {
                   this.state.foots.map((foot,i)=>{
                       return (
                           <div key={i} onClick={()=>this.handleChangeActive(i)}>
                                <NavLink activeClassName="nav-active"  to={foot.path} >
                                    <i className={"iconfont "+foot.icon}> </i>
                                    <span> {foot.txt} </span>
                                    {i==this.state.foots.length-2&&<Badge 
                                        text="8" 
                                        className="hot" 
                                        hot 
                                        style={{ 
                                        marginLeft: 12,
                                        backgroundColor:active==2?"darkgreen":"#999999"
                                     }} />}
                                </NavLink>
                           </div>
                       )
                   })
               }
           </footer>
        )
    }
}