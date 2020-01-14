import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    WingBlank,
    SearchBar
} from  "antd-mobile"
import {connect} from "react-redux"
import List from "~/components/list"
import { getSearchList } from "../../actions";

@connect(
    state=>{
        return {
            searchList:state.getIn(['data','searchList'])
        }
    }
)
class Search extends Component{

    handleSubmit(keyword){
        console.log(keyword);
        this.props.dispatch(getSearchList({
            url:"/react/getGoodList",
            params:{
                keyword:keyword
            }
        }))
    }

    render(){
        const {
            searchList
        } = this.props;
        return (
            <div>
                <Head title="搜索" show={true} search={true} ></Head>
                <WingBlank>
                    <SearchBar placeholder="请输入关键字" onSubmit={this.handleSubmit.bind(this)}  />    
                </WingBlank>

                <List good={searchList} search={true} ></List>
            </div>
        )
    }
}

export default Search;