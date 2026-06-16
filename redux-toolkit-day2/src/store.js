import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./components/Users/userSlice";

const store = configureStore({
    reducer:{
        users: userReducer
    }
})

export default store;