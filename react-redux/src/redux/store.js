import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";

import { createLogger } from "redux-logger";
const logger = createLogger()

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer
})


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;