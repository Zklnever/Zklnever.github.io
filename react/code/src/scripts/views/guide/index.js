import "./index.scss"
import React, {Component} from "react"
import {MySwipe} from "~/components/swipe";
import {Button} from "antd-mobile"

const SwipeItem = MySwipe.Item;

export default class Guide extends Component{

    constructor(){
        super();
        this.state = {
            imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg")
            ]
        }
    }

    componentDidMount(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>3){
                this.props.history.push("/main/home");
            }
        }else{
            localStorage.visitCount = 1;
        }
    }


    handleGotoMain=(index)=>{
        if(index==this.state.imgs.length-1){
            this.props.history.push("/main/home");
        }
    }

    render(){
        return (
            <div className="g-box">
                <MySwipe
                    id="guide"
                    options={{loop:false,autoplay:{delay:1500},speed:1200}}
                >
                    {
                        this.state.imgs.map((item,idx)=>{
                            return (
                                <SwipeItem key={idx} >
                                    <img  src={item} onClick={()=>this.handleGotoMain(idx)} className="g-img" alt=""/>
                                    {idx==this.state.imgs.length-1&&<Button className="gotobtn" type="warning"></Button>}
                                </SwipeItem>    
                            )
                        })
                    }
                </MySwipe>   
            </div>
        )
    }
}