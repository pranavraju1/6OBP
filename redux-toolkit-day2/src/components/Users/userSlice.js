import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    error:""
}

//createAsyncThunk is a function that takes action name as the 1st arg and 
// callback func that creates the payload

// we dont need a catch block here as the error will be handled later
// createAsyncThunk -> automatically dispatched lifecycle methods based on the returned promise


export const fetchUsers = createAsyncThunk('users/fetchUsers', ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res=>res.data)
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading=false;
            state.users = action.payload;
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message;
        })
    }
})

export default userSlice.reducer;

