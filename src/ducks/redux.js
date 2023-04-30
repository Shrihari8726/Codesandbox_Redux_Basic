import { combineReducers, createStore } from "redux";
import reducer from "./reducers/counter";

const reducers = combineReducers({ counter: reducer });

const store = createStore(reducers);

export default store;
