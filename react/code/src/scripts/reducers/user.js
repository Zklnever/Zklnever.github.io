
import immutable from "immutable"

const defaultState = immutable.fromJS({
    pic:null,
    mobile:'',
    token:sessionStorage.token
})

export const user = (state=defaultState,action)=>{
    switch(action.type){

        case "changeUser":
        var obj = {...state.toJS(),...action.payload};
        return immutable.fromJS(obj);
        break;



        default:
        return state;
        break;
    }
}