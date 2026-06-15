import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"



const Counter = () => {

    console.log(useContext(CounterContext))
    const {state, dispatch}= useContext(CounterContext); 

    return (
    <div>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({type: 'increase'})}>Increase</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter
