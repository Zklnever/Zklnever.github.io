

import React, {Component} from "react"

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import LazyLoad from "&/lazyload";
import PropTypes from "prop-types"
// import Guide from "./guide";   
// import Login from "./login";

// 所有的路由  在这里配置 
export default class MainLayout extends Component{
    getChildContext(){
        return {
            history:this.props.history,
            location:this.props.location
        }
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact render={()=>(<Redirect to="/guide" /> )}  />
                    <Route path="/guide" component={LazyLoad(()=>import("./guide"))} />
                    <Route path="/main" component={LazyLoad(()=>import("./main"))} />
                    <Route path="/login" component={LazyLoad(()=>import("./login"))} />
                    <Route path="/search" component={LazyLoad(()=>import("./search"))} />
                    <Route path="/scan" component={LazyLoad(()=>import("./scan"))} />
                    <Route path="/detail/:goodId" component={LazyLoad(()=>import("./detail"))} />
                    <Route render={()=>(<Redirect to="/guide" /> )} />
                </Switch>  
                 
            </div>
        )
    }
}

MainLayout.childContextTypes = {
    history:PropTypes.object,
    location:PropTypes.object,

}