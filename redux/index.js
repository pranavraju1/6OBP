// function createStore(reducer, initialState){
    
//     let state = initialState;
//     function getState(){
//         return state;
//     }
//     function dispatch(action){
//         state = reducer(state, action)
//     }

//     return{
//         getState,
//         dispatch
//     }
// } 

import {createStore} from "redux";


// actionTypes
const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT'; 
const INCREMENTBY = 'INCREMENTBY'; 

// actionCreators
// these are function that return action
function increment(){
    return {type: INCREMENT}
}
function decrement(){
    return {type: DECREMENT}
}

function incrementBy(paylod=1){
    return {type: INCREMENTBY, paylod}
}

const counterReducer = (state, action) =>{
    switch(action.type){
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case INCREMENTBY:
            return state + action.paylod 
        default:
            return state
    }
}


const store = createStore(counterReducer, 0);
console.log(store.getState())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState())
store.dispatch(decrement())
console.log(store.getState())

store.dispatch(incrementBy(5))
console.log(store.getState())







// console.log(counterReducer(0, {type: "INCREMENT"}))
// console.log(counterReducer(1, {type: "DECREMENT"}))
// console.log(counterReducer(0, {type: ""}))