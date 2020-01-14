import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    Button
} from "antd-mobile"
import {axios} from "&"
import UploadImg from "~/components/uploadImg"
import {connect} from "react-redux"
import { getMobile } from "../../actions";
import demo from "~/mobx/demo"
import {observer} from "mobx-react"
console.log(demo);
@connect(
    state=>(
        {
            token:state.getIn(['user','token']),
            mobile:state.getIn(['user','mobile']),
        }
    )
)
@observer
class Mine extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin:!!sessionStorage.token,
            mobile:null
        }
    }

    componentDidMount(){
        // axios.post("/react/getMobile")
        // .then(res=>{
        //     this.setState({
        //         mobile:res.data.result
        //     })
        // })
        if(!this.props.mobile){
            this.props.dispatch(getMobile({
                url:"/react/getMobile"
            }))
        }
    }

    handleGotoLogin=()=>{
        this.props.history.push("/login");
    }

    render(){
        const {
            isLogin,
        } = this.state;
        const {
            token,
            mobile
        } = this.props;
        const {
            count,
            city,
            msg,
            newCount,
            countAdd,
            changeCount,
            changeCity,
            changeMsg
        } = demo ;
        return (
            <div>
                <Head title="个人中心"></Head>
                {
                    isLogin&&<div>
                        <h2>Mine- mine - 个人中心....</h2>
                        <h2>欢迎你 ----- {mobile} </h2> 
                        <h2>token ==  {token}</h2>
                        <UploadImg></UploadImg>
                    </div>
                }
                {
                    !isLogin&&<div>
                        <h2>你还没登录,请马上登录</h2>
                        <Button type="warning" inline onClick={this.handleGotoLogin}>我要登录</Button>
                    </div>
                }
                
                <hr/>
                <div>
                    <h1>mobx -- 案例 </h1>
                    <h2>count === {demo.count} --- {newCount} </h2>
                    <h2>city === {city} </h2>
                    <h2>msg === {msg}</h2>
                    <hr/>
                    <Button type="warning" inline onClick={countAdd}>count add </Button>
                    <Button type="warning" inline onClick={()=>changeCount(-50)}>changeCount </Button>
                    <Button type="warning" inline onClick={()=>changeCity('我想去 波斯')}> 我想去 波斯  </Button>
                    <p>
                        <input type="text" value={msg} onChange={(e)=>changeMsg(e.target.value)}  />
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Mine;