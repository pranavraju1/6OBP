import {createStore} from "redux";

const initialState = []

// actionTypes
const CREATETODO = "CREATETODO"

// actionCreators
// these are function that return action
const createTodo = (paylod) => {
    return {type: CREATETODO, paylod}
} 
const deleteTodo = () => {

} 
const getTodos = () => {

}

const todoReducer = (state, action) =>{
    switch(action.type){
        case CREATETODO:{
            console.log("state", state)
            let obj = {id:state.length, task: action.paylod}
            return [...state, obj];
        }
        default:
            return state
    }
}



const store = createStore(todoReducer, initialState);
store.dispatch(createTodo("todo 1"))
store.dispatch(createTodo("todo 2"))
console.log(store.getState())  //[{id:0, task: "todo 1"}]



