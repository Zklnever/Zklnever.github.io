import "./index.scss"
import React, {Component} from "react"

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import LazyLoad from "&/lazyload"
// import {Foot} from "~/components/foot"
import {Afoot} from "~/components/afoot"

export default class Main extends Component{
    render(){
        console.log(this.props);
        return (
            <div className="box" >
                {/* <h2>main-main-main</h2>
                <hr/> */}
                <Switch>
                    <Route path="/main/home" component={LazyLoad(()=>import("../home"))}   />
                    <Route path="/main/classify" component={LazyLoad(()=>import("../classify"))}   />
                    <Route path="/main/cart" component={LazyLoad(()=>import("../cart"))}   />
                    <Route path="/main/mine" component={LazyLoad(()=>import("../mine"))}   />
                    <Route render={()=>(<Redirect to="/main/home" />  )}/>
                </Switch>
                <Afoot {...this.props}  />
            </div>
        )
    }
}