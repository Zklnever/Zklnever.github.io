

## mobx 

## 1 安装 

cnpm i  mobx    mobx-react -S 

单向数据流    简明清晰 


##  2.  分层

Actions  动作 修改state 
State   状态  显示的组件view
Computed  计算属性
Reactions   响应式  



通过事件驱动（UI 事件、网络请求…）触发 Actions，在 Actions 中修改了 State 中的值，这里的 State 既应用中的 store 树（存储数据），然后根据新的 State 中的数据计算出所需要的计算属性（computed values）值，最后响应（react）到 UI 视图层

 
可观察状态（State）   
 @observable    observable 的属性值在其变化的时候 mobx 会自动追踪并作出响应

@observable.deep （默认）对对象进行深拷贝；
@observable.shallow 它只对对象进行浅拷贝；
@observable.ref 禁用对象的自动转化，只转化其引用；

@action 
动作（Action）  执行修改  State(observable) 的函数  
可观察的属性值， 在他们改变的时候则会触发观察监听的函数


@observer   观察者 
 订阅 组件  当 action 执行 修改 state 触发这个监听函数   数据变化时都可以强制刷新组件


##  mobx 观察者模式  
MobX 的理念是通过观察者模式对数据做出追踪处理，在对可观察属性的作出变更或者引用的时候，触发其依赖的监听函数，在 React 中既是在 @observer 中对组件进行数据更新 监听 并渲染到视图层面


mobx 原理  
先通过 @observable 设置 可观察数据  (state)
然后 通过 @observer 这个观察者 去 订阅 组件内的  可观察数据 
当 通过 @action 对 可观察数据 修改的时候   @observer   会马上对组件进行数据更新并渲染到视图层面