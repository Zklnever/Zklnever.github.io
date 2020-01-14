
import immutable from "immutable"

const defaultState = immutable.fromJS({
    banner:[],
    count:2020,
    city:"美丽的京山",
    goodList:[],
    goodType:[],
    searchList:[]
})

export const data = (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){

        case "changeCount":
        return state.update("count",x=>x+action.payload);
        break;
        
        case "changeCity":
        return state.set("city",action.payload);
        break;

        case "getBanner":
        return state.set("banner",action.payload);
        break;

        case "getGoodList":
        return state.set("goodList",action.payload);
        break;

        case "getGoodType":
        return state.set("goodType",action.payload);
        break;

        case "changeGoodListReverse":
        // return state.update("goodList",x=>x.reverse());
        // var goodList = state.toJS().goodList;
        // goodList.reverse();
        return state.set("goodList",state.toJS().goodList.reverse());
        break;

        case "getSearchList":
        return state.set("searchList",action.payload);
        break;

        case "changeSearchListReverse":
        return state.set("searchList",state.toJS().searchList.reverse());
        break;

        default:
        return state;
        break;
    }
}