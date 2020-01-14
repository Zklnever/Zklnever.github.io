import "./index.scss";
import React , {Component} from "react"
import {
    NavBar,
    Icon,
    Popover,
    ActionSheet
} from "antd-mobile"
import {history} from "&"
export default class Head extends Component{

    handleGoBack(show){
        if(show){
            history.goBack();
        }
    }

    handleGoSearch(){
        history.push("/search");
    }

    render(){
        const {
            title,
            show,
            search
        } = this.props;
        return (
            
            <NavBar
            mode="light"
            icon={show&&<Icon type="left" />}
            onLeftClick={() => this.handleGoBack(show)}
            rightContent={[
              !search&&<Icon onClick={this.handleGoSearch.bind(this) } key="0" type="search" style={{ marginRight: '16px' }} />,
              <Pop scan={this.props.scan} login={this.props.login } key={1} />  ,
            ]}
          > {title} </NavBar>
        )
    }
}

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Pop extends Component{
    state = {
        visible:false,
        selected:""
    }

    handleVisibleChange=(visible)=>{
        this.setState({
            visible
        })
    }
    onSelect = (opt) => {
        console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });

        if(opt.props.value=="login"){
            history.push("/login");
        }else if(opt.props.value=="scan"){
            history.push("/scan");
        }else{
            this.showActionSheet();
        }
    }

    showActionSheet = () => {
        const BUTTONS = ['拍照', '从手机相册选择', '使用相机拍照', '删除', '取消'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          // title: 'title',
          message: 'wh1910-app',
          maskClosable: true,
          'data-seed': 'logId',
          wrapProps:{
            onTouchStart: e => e.preventDefault(),
          }
        },
        (buttonIndex) => {
          console.log(buttonIndex)
        });
    }

    render(){
        const {
            scan,
            login
        } =  this.props;
        return (
            <Popover
            mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
                ( !scan&&<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                (<Item key="5" value="photo" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>拍照</Item>),
                (!login&&<Item key="6" value="login" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>登录</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
                <Icon type="ellipsis" />
            </Popover>
        )
    }
}