(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[10],{112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(69),o=(r=a)&&r.__esModule?r:{default:r};t.getComponentLocale=function(e,t,n,r){var a={};if(t&&t.antLocale&&t.antLocale[n])a=t.antLocale[n];else{var c=r();a=c.default||c}var i=(0,o.default)({},a);e.locale&&(i=(0,o.default)({},i,e.locale),e.locale.lang&&(i.lang=(0,o.default)({},a.lang,e.locale.lang)));return i},t.getLocaleCode=function(e){var t=e.antLocale&&e.antLocale.locale;if(e.antLocale&&e.antLocale.exist&&!t)return"zh-cn";return t}},148:function(e,t,n){"use strict";n(71),n(75),n(149)},149:function(e,t,n){},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(n(69)),a=h(n(65)),o=h(n(66)),c=h(n(67)),i=h(n(68)),s=f(n(0)),u=f(n(3)),l=h(n(158)),d=n(112),p=h(n(76));function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,a.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=(0,d.getComponentLocale)(this.props,this.context,"PullToRefresh",(function(){return n(151)})),t=e.activateText,a=e.deactivateText,o=e.finishText,c=(0,r.default)({activate:t,deactivate:a,release:s.createElement(p.default,{type:"loading"}),finish:o},this.props.indicator);return s.createElement(l.default,(0,r.default)({},this.props,{indicator:c}))}}]),t}(s.Component);t.default=v,v.defaultProps={prefixCls:"am-pull-to-refresh"},v.contextTypes={antLocale:u.object},e.exports=t.default},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={activateText:"\u677e\u5f00\u7acb\u5373\u5237\u65b0",deactivateText:"\u4e0b\u62c9\u53ef\u4ee5\u5237\u65b0",finishText:"\u5b8c\u6210\u5237\u65b0"},e.exports=t.default},152:function(e,t,n){},153:function(e,t,n){},157:function(e,t,n){"use strict";n(148);var r,a=n(150),o=n.n(a),c=n(13),i=n(14),s=n(16),u=n(15),l=n(17),d=(n(152),n(0)),p=n.n(d),f=(n(84),n(85)),h=n.n(f),v=(n(87),n(89)),g=n.n(v),m=(n(153),n(20)),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item;return p.a.createElement("div",{className:"move-in",style:{borderBottom:"2px dotted red"}},p.a.createElement(m.b,{to:"/detail/"+e._id+"?name="+e.name},p.a.createElement(h.a,null,p.a.createElement(g.a,null),p.a.createElement("img",{style:{width:"100%",height:280},src:e.img,alt:""}),p.a.createElement("h2",{style:{fontSize:25,color:"yellowgreen"}},e.name,"---RMB==",e.price,"--type==",e.type.text),p.a.createElement(g.a,null))))}}]),t}(d.Component),b=n(26),S=n(81),_=n(74),O=Object(b.b)()(r=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={refreshing:!1},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.tab,t.good);t.search;return console.log(n),p.a.createElement("div",null,p.a.createElement(o.a,{damping:60,ref:function(t){return e.ptr=t},style:{overflow:"auto"},indicator:{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"},direction:"down",refreshing:this.state.refreshing,onRefresh:function(){e.setState({refreshing:!0}),setTimeout((function(){var t=e.props,n=t.dispatch;n(t.search?Object(S.d)():Object(S.c)()),Object(_.c)("\u4e0b\u62c9\u5237\u65b0\u6210\u529f"),e.setState({refreshing:!1})}),1e3)}},n.map((function(e,t){return p.a.createElement(y,{key:t,item:e})}))))}}]),t}(d.Component))||r;t.a=O},158:function(e,t,n){"use strict";n.r(t);var r=n(69),a=n.n(r),o=n(65),c=n.n(o),i=n(66),s=n.n(i),u=n(67),l=n.n(u),d=n(68),p=n.n(d),f=n(0),h=n.n(f),v=n(70),g=n.n(v),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},y=function(e){function t(){return c()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),s()(t,[{key:"shouldComponentUpdate",value:function(e){return e.shouldUpdate}},{key:"render",value:function(){return h.a.createElement("div",null,this.props.render())}}]),t}(h.a.Component);var b="undefined"!==typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),S="down",_="up",O={activate:"release",deactivate:"pull",release:"loading",finish:"finish"},j=!1;try{var E=Object.defineProperty({},"passive",{get:function(){j=!0}});window.addEventListener("test",null,E)}catch(T){}var C=!!j&&{passive:!1},w=function(e){function t(){c()(this,t);var e=l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={currSt:"deactivate",dragOnEdge:!1},e._isMounted=!1,e.shouldUpdateChildren=!1,e.triggerPullToRefresh=function(){!e.state.dragOnEdge&&e._isMounted&&(e.props.refreshing?(e.props.direction===_&&(e._lastScreenY=-e.props.distanceToRefresh-1),e.props.direction===S&&(e._lastScreenY=e.props.distanceToRefresh+1),e.setState({currSt:"release"},(function(){return e.setContentStyle(e._lastScreenY)}))):e.setState({currSt:"finish"},(function(){return e.reset()})))},e.init=function(t){t&&(e._to={touchstart:e.onTouchStart.bind(e,t),touchmove:e.onTouchMove.bind(e,t),touchend:e.onTouchEnd.bind(e,t),touchcancel:e.onTouchEnd.bind(e,t)},Object.keys(e._to).forEach((function(n){t.addEventListener(n,e._to[n],C)})))},e.destroy=function(t){e._to&&t&&Object.keys(e._to).forEach((function(n){t.removeEventListener(n,e._to[n])}))},e.onTouchStart=function(t,n){e._ScreenY=e._startScreenY=n.touches[0].screenY,e._lastScreenY=e._lastScreenY||0},e.isEdge=function(t,n){var r=e.props.getScrollContainer();if(r&&r===document.body){var a=document.scrollingElement?document.scrollingElement:document.body;if(n===_)return a.scrollHeight-a.scrollTop<=window.innerHeight;if(n===S)return a.scrollTop<=0}return n===_?t.scrollHeight-t.scrollTop===t.clientHeight:n===S?t.scrollTop<=0:void 0},e.damping=function(t){return Math.abs(e._lastScreenY)>e.props.damping?0:t*=.6*(1-Math.abs(e._ScreenY-e._startScreenY)/window.screen.height)},e.onTouchMove=function(t,n){var r=n.touches[0].screenY,a=e.props.direction;if(!(a===_&&e._startScreenY<r||a===S&&e._startScreenY>r)&&e.isEdge(t,a)){e.state.dragOnEdge||(e._ScreenY=e._startScreenY=n.touches[0].screenY,e.setState({dragOnEdge:!0})),n.preventDefault();var o=Math.round(r-e._ScreenY);e._ScreenY=r,e._lastScreenY+=e.damping(o),e.setContentStyle(e._lastScreenY),Math.abs(e._lastScreenY)<e.props.distanceToRefresh?"deactivate"!==e.state.currSt&&e.setState({currSt:"deactivate"}):"deactivate"===e.state.currSt&&e.setState({currSt:"activate"}),b&&n.changedTouches[0].clientY<0&&e.onTouchEnd()}},e.onTouchEnd=function(){e.state.dragOnEdge&&e.setState({dragOnEdge:!1}),"activate"===e.state.currSt?(e.setState({currSt:"release"}),e._timer=setTimeout((function(){e.props.refreshing||e.setState({currSt:"finish"},(function(){return e.reset()})),e._timer=void 0}),1e3),e.props.onRefresh()):e.reset()},e.reset=function(){e._lastScreenY=0,e.setContentStyle(0)},e.setContentStyle=function(t){var n,r;e.contentRef&&(n=e.contentRef.style,r="translate3d(0px,"+t+"px,0)",n.transform=r,n.webkitTransform=r,n.MozTransform=r)},e}return p()(t,e),s()(t,[{key:"shouldComponentUpdate",value:function(e){return this.shouldUpdateChildren=this.props.children!==e.children,!0}},{key:"componentDidUpdate",value:function(e){e!==this.props&&e.refreshing!==this.props.refreshing&&this.triggerPullToRefresh()}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.init(e.props.getScrollContainer()||e.containerRef),e.triggerPullToRefresh(),e._isMounted=!0}))}},{key:"componentWillUnmount",value:function(){this.destroy(this.props.getScrollContainer()||this.containerRef)}},{key:"render",value:function(){var e=this,t=a()({},this.props);delete t.damping;var n=t.className,r=t.prefixCls,o=t.children,c=t.getScrollContainer,i=t.direction,s=(t.onRefresh,t.refreshing,t.indicator),u=(t.distanceToRefresh,m(t,["className","prefixCls","children","getScrollContainer","direction","onRefresh","refreshing","indicator","distanceToRefresh"])),l=h.a.createElement(y,{shouldUpdate:this.shouldUpdateChildren,render:function(){return o}}),d=function(t){var n=g()(t,!e.state.dragOnEdge&&r+"-transition");return h.a.createElement("div",{className:r+"-content-wrapper"},h.a.createElement("div",{className:n,ref:function(t){return e.contentRef=t}},i===_?l:null,h.a.createElement("div",{className:r+"-indicator"},s[e.state.currSt]||O[e.state.currSt]),i===S?l:null))};return c()?d(r+"-content "+r+"-"+i):h.a.createElement("div",a()({ref:function(t){return e.containerRef=t},className:g()(n,r,r+"-"+i)},u),d(r+"-content"))}}]),t}(h.a.Component),x=w;w.defaultProps={prefixCls:"rmc-pull-to-refresh",getScrollContainer:function(){},direction:S,distanceToRefresh:25,damping:100,indicator:O};t.default=x},332:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);n(170);var r,a=n(171),o=n.n(a),c=n(13),i=n(14),s=n(16),u=n(15),l=n(17),d=(n(332),n(0)),p=n.n(d),f=n(77),h=n(26),v=n(81),g=n(157),m=Object(h.b)((function(e){return{goodList:e.getIn(["data","goodList"]),goodType:e.getIn(["data","goodType"])}}))(r=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.goodList,r=e.goodType;!n.length>0&&t(Object(v.g)({url:"/react/getGoodList"})),!r.length>0&&t(Object(v.h)({url:"/react/getGoodTypes"}))}},{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.goodList,n=e.goodType,r=n.map((function(e){return e.title=e.text,e}));return p.a.createElement("div",{className:"c-box"},p.a.createElement(f.a,{title:"\u5546\u54c1\u5206\u7c7b",show:!0}),p.a.createElement("div",{className:"c-main"},p.a.createElement(o.a,{tabs:r,initialPage:0,tabBarUnderlineStyle:{borderColor:"orange"},tabBarActiveTextColor:"orange"},n.map((function(e,n){return p.a.createElement(g.a,{key:n,tab:e,good:t.filter((function(t){return t.type.value==e.value}))})})))))}}]),t}(d.Component))||r;t.default=m},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n(95);var r=n(96),a=n.n(r),o=(n(97),n(98)),c=n.n(o),i=(n(99),n(100)),s=n.n(i),u=(n(75),n(76)),l=n.n(u),d=n(13),p=n(14),f=n(16),h=n(15),v=n(17),g=(n(78),n(0)),m=n.n(g),y=n(72),b=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleGoBack",value:function(e){e&&y.c.goBack()}},{key:"handleGoSearch",value:function(){y.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.show,a=t.search;return m.a.createElement(s.a,{mode:"light",icon:r&&m.a.createElement(l.a,{type:"left"}),onLeftClick:function(){return e.handleGoBack(r)},rightContent:[!a&&m.a.createElement(l.a,{onClick:this.handleGoSearch.bind(this),key:"0",type:"search",style:{marginRight:"16px"}}),m.a.createElement(O,{scan:this.props.scan,login:this.props.login,key:1})]}," ",n," ")}}]),t}(g.Component),S=c.a.Item,_=function(e){return m.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""})},O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){console.log(e.props.value),n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?y.c.push("/login"):"scan"==e.props.value?y.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];a.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"wh1910-app",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.scan,n=e.login;return m.a.createElement(c.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!t&&m.a.createElement(S,{key:"4",value:"scan",icon:_("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"\u626b\u4e00\u626b"),m.a.createElement(S,{key:"5",value:"photo",icon:_("PKAgAqZWJVNwKsAJSmXd"),style:{whiteSpace:"nowrap"}},"\u62cd\u7167"),!n&&m.a.createElement(S,{key:"6",value:"login",icon:_("uQIYTFeRrjPELImDRrPt")},m.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},m.a.createElement(l.a,{type:"ellipsis"}))}}]),t}(g.Component)},78:function(e,t,n){},81:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"d",(function(){return v}));var r=n(94),a=n.n(r),o=n(72);function c(e){return{type:"changeCount",payload:e}}function i(e){return{type:"changeCity",payload:e}}function s(e){var t,n,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.cb,c.next=3,a.a.awrap(o.a.get(t));case 3:return r=c.sent,n(),c.abrupt("return",{type:"getBanner",payload:r.data.result});case 6:case"end":return c.stop()}}))}function u(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.url,r.next=3,a.a.awrap(o.a.post(t));case 3:return n=r.sent,r.abrupt("return",{type:"changeUser",payload:{mobile:n.data.result}});case 5:case"end":return r.stop()}}))}var l=function(e){return{type:"changeUser",payload:e}};function d(e){var t,n,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,a.a.awrap(o.a.get(t,{params:n}));case 3:return r=c.sent,c.abrupt("return",{type:"getGoodList",payload:r.data.result});case 5:case"end":return c.stop()}}))}function p(e){var t,n,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,a.a.awrap(o.a.get(t,{params:n}));case 3:return r=c.sent,c.abrupt("return",{type:"getGoodType",payload:r.data.result});case 5:case"end":return c.stop()}}))}function f(){return{type:"changeGoodListReverse"}}function h(e){var t,n,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,a.a.awrap(o.a.get(t,{params:n}));case 3:return r=c.sent,c.abrupt("return",{type:"getSearchList",payload:r.data.result});case 5:case"end":return c.stop()}}))}function v(){return{type:"changeSearchListReverse"}}},84:function(e,t,n){"use strict";n(71),n(86)},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(65)),a=u(n(66)),o=u(n(67)),c=u(n(68)),i=u(n(70)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.size,r=e.className,a=e.children,o=e.style,c=(0,i.default)(t,t+"-"+n,r);return s.createElement("div",{className:c,style:o},a)}}]),t}(s.Component);t.default=l,l.defaultProps={prefixCls:"am-wingblank",size:"lg"},e.exports=t.default},86:function(e,t,n){},87:function(e,t,n){"use strict";n(71),n(88)},88:function(e,t,n){},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(65)),a=u(n(66)),o=u(n(67)),c=u(n(68)),i=u(n(70)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.size,r=e.className,a=e.style,o=e.onClick,c=(0,i.default)(t,t+"-"+n,r);return s.createElement("div",{className:c,style:a,onClick:o})}}]),t}(s.Component);t.default=l,l.defaultProps={prefixCls:"am-whitespace",size:"md"},e.exports=t.default}}]);
//# sourceMappingURL=10.cf75c499.chunk.js.map