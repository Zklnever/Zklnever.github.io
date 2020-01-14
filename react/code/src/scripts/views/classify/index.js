import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {connect} from "react-redux"
import { getGoodList, getGoodType } from "../../actions";
import {
    WhiteSpace,
    Tabs
} from "antd-mobile"

import List from "~/components/list"
@connect(
    state=>{
        return {
            goodList:state.getIn(['data','goodList']),
            goodType:state.getIn(['data','goodType'])
        }
    }
)


class Classify extends Component{
    componentDidMount(){
        const {
            dispatch ,
            goodList,
            goodType
        } = this.props;
        if(!goodList.length>0){
            dispatch(getGoodList({url:"/react/getGoodList"}))
        }

        if(!goodType.length>0){
            dispatch(getGoodType({url:"/react/getGoodTypes"}))
        }
    }
    render(){
        console.log(this.props)
        const {
            goodList,
            goodType
        } = this.props;
        const tabs = goodType.map((item)=>{
            item.title =  item.text;
            return item;
        })
        return (
            <div className="c-box">
                <Head title="商品分类" show={true} ></Head>
                <div className="c-main">
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarUnderlineStyle={{borderColor:"orange"}}
                    tabBarActiveTextColor="orange"
                    
                    >
                    {
                        goodType.map((val,i)=>{
                            return (
                                <List 
                                    key={i} 
                                    tab={val}
                                    good={goodList.filter(item=>item.type.value==val.value)}
                                    >
                                   
                                </List>
                            )
                        })
                    }
                </Tabs>
                </div>
            </div>
        )
    }
}

export default Classify;