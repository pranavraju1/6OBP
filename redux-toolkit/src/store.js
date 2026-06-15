import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./components/Counter/counterSlice";
import todoReducer from "./components/Todo/todoSlice";

import { createLogger } from "redux-logger";
const logger = createLogger();

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;