import "./index.scss";
import React ,{ Component } from "react";
import {axios,baseURL}  from "&"
import initPic from "@/assets/images/Pikachu.jpg"
import {connect} from "react-redux"
import { changeUser } from "../../actions";


@connect(
    state=>(
        {
            pic:state.getIn(['user','pic'])
        }
    )
)
class UploadImg extends  Component{
    constructor(){
        super();
        this.state = {
            pic:null
        }
    }



    componentDidMount(){
        let userInfo = localStorage.userInfo;
        if(userInfo){
            userInfo = JSON.parse(userInfo);
            console.log(userInfo)
            if(userInfo.mobile==sessionStorage.mobile){
                // this.setState({
                //     pic:userInfo.pic
                // })
                this.props.dispatch(changeUser({pic:userInfo.pic}))
            }else{
                console.log("sssddd");
                this.getInitPic()
            }
        }else{
            this.getInitPic()
        }
    }

    getInitPic = ()=>{
        if(!this.props.pic){
            axios.post("/react/getlastPic")
                .then(res=>{
                    if(!!res.data.type){
                        // this.setState({
                        //     pic:res.data.result.pic.replace(/public/,baseURL)
                        // })
                        this.props.dispatch(changeUser({pic:res.data.result.pic.replace(/public/,baseURL)}))
                    }else{
                        // this.setState({
                        //     pic:initPic
                        // })
                        this.props.dispatch(changeUser({pic:initPic}))
                    }
                })
        }
        
    }

    handleClick=()=>{
        this.fileImg.click();
    }


    handleChange=()=>{
        console.log("文件上传");
        const file = this.fileImg.files[0];
        console.log(file);
        var data = new FormData();
        data.append("avatar",file);
        
        axios({
            url:"/react/uploadImg",
            method:"POST",
            data,
        }).then(res=>{
            if(!!res.data.type){
                var pic = res.data.pic.replace(/public/,baseURL);
                const userInfo = JSON.stringify({
                    mobile:res.data.mobile,
                    pic
                });
                localStorage.userInfo = userInfo;
                // this.setState({
                //     pic
                // })
                this.props.dispatch(changeUser({pic:pic}))
            }else{
                localStorage.userInfo = "";
            }
        })
    }

    render(){
        const {
            pic
        } = this.props; 
        return (
            <div>
                <img src={pic} alt="" className="touxiang"  onClick={this.handleClick}   />
                <input type="file" style={{display:'none'}} onChange={this.handleChange}  ref={el=>this.fileImg=el}   />
            </div>
        )
    }
}

export default UploadImg;