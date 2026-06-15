import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import postReducer from "./postReducer";

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;
