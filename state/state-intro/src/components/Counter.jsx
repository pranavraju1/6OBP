// here react does not know that it needs to update the screen
// when we change a regular variable react has no idea what just happened

// even if we made the component re render again it would still show the value to be 0
// this is bc we have initialized count to be 0 ie. local variable dont persits between renders.

// This is where state comes in
// State is a components memory or property
// Its special data tha
// 1. triggers a re render when it changes (solving the screen update problem)
// 2. persist between reders (solving our reset problem)

// Hooks
// Hooks are special functions that let you "hook into" react features
// before in react we use to make components using class but later everyone shifted to function components
// Hooks helps us make the function components functional (let us use the react features)



// useState
// it is a React hook that lets a functional component store and update local state.
// It returns an array with two values, the current state value nad setter fucntion used to update the state
// Syntax
// const [stateValue, setStateValue] = useState(initialValue)
// stateValue: current value
// setStateValue: function to update the value
// initialValue: starting value of the state







import { useState } from "react";

const Counter = () => {


    let [count, setCount] = useState(0)
  
    console.log("component rendering")

    const handleIncrease = () => {
        //you cannot directly update your state like this bc this will not trigger the rerender of your page  
        // count++
        // setCount(count + 1)
        setCount((prev) => prev + 1)
    }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={()=>setCount(prev => prev + 5)}>Increase by 5</button>
      <br />
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter;
