

import {combineReducers} from "redux-immutable"
import { data } from "./data";
import { user } from "./user";

export const reducers = combineReducers({
    data:data,
    user:user
});