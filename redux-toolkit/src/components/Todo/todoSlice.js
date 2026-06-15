import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo(state, action){
            console.log(action.payload)
            state.push(action.payload)
        },
        deleteTodo(state, action){
            console.log(action.payload)
            let elemetIndex = state.findIndex((item) => item.id == action.payload)
            state.splice(elemetIndex,1);
        }
    }
})


export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;

