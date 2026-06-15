import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment(state){
            // state.count = state.count + 1
            state.count += 1    //looks like mutaion but its safe
        },
        decrement(state){
            state.count -= 1
        },
        incrementBy(state, action){
            state.count += action.payload
        },
        decrementBy(state, action){
            state.count -= action.payload
        }
    }
})

export const {increment, decrement, incrementBy, decrementBy} = counterSlice.actions;

export default counterSlice.reducer;