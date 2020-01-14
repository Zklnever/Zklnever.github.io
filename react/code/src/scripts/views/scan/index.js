import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head";
import {
    Modal,
    Toast
} from "antd-mobile";

const alert = Modal.alert;
const showAlert = (that) => {
    const alertInstance = alert('警告', '我们即将调用你的手机系统硬件相机', [
      { text: '取消', onPress: () => that.props.history.go(-1), style: 'default' },
      { text: '同意', onPress: () => Toast.success('谢谢同意', 1) },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
};
  
export default class Scan extends Component{

    componentWillMount(){
        showAlert(this);
    }

    render(){
        return (
            <div>
                <Head title="扫一扫" show={true} scan={true} ></Head>
                <h2>扫一扫</h2>
            </div>
        )
    }
}