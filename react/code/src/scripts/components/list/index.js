import "./index.scss"
import React, {Component} from "react";
import {
    PullToRefresh,
    WhiteSpace,
    WingBlank
} from "antd-mobile"
import {
    Link
} from "react-router-dom"

import Item from "../item"
import {connect} from "react-redux"
import { changeGoodListReverse, changeSearchListReverse } from "../../actions";
import {success} from "&/axios";

@connect()
class List extends Component{
    constructor(){
        super();
        this.state = {
            refreshing:false
        }
    }
    render(){
        const {
            tab,
            good,
            search
        } = this.props;
        console.log(good)
        return (
            <div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        overflow: 'auto',
                    }}
                    indicator={ { deactivate: '上拉可以刷新' }}
                    direction= { 'down' }
                    refreshing={this.state.refreshing}
                    onRefresh={
                        ()=>{
                            this.setState({ refreshing: true });  // 正在刷新 
                            setTimeout(() => {
                                const {
                                    dispatch,
                                    search
                                } = this.props;
                                if(search){
                                    dispatch(changeSearchListReverse())
                                }else{
                                    dispatch(changeGoodListReverse())
                                }
                                
                                success('下拉刷新成功')
                                this.setState({ refreshing: false }); 
                            }, 1000);
                        }
                    }
                >
                    {
                        good.map((item,index)=>{
                            return (
                               <Item key={index} item={item}> 

                               </Item>
                            )
                        })
                    }
                </PullToRefresh>

            </div>
        )
    }
}

export default  List 

