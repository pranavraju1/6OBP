import { useReducer, useState } from "react"

const initialState = {
    count: 0,
    step: 1
}

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        case 'increaseStep':
            return {...state, step: state.step + 1}
        case 'reset' :
            return initialState
        default:
            return state
    }
}

const CounterUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [step, setStep] = useState(1);

    return (
    <div>
        <h2>Count: {state.count}</h2>
        <h2>Step: {state.step}</h2>

        <button onClick={()=>dispatch({type:"increment", payload: Number(step)})}>+</button>
        <button onClick={()=>dispatch({type:"decrement", payload: Number(step)})}>-</button>
        {/* <button onClick={()=>dispatch({type:"increaseStep"})}>Increase Step</button> */}
        <input type="number" placeholder="enter number of steps" onChange={(e)=>setStep(e.target.value)} />
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>

    </div>
  )
}

export default CounterUseReducer



// useReducer -> its a hook that takes the reducer function and initialState as arg and 
// return the current state and dispatch function to do the updation

// reducer -> is a function that takes state and action as arg and returns the updated state

// dispatch -> is used to send the action required

// action -> its a obj that describes what is to happen to the state