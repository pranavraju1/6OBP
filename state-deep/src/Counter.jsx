import { useState } from "react";
// the output of the below code when i click on the button is going to be
// count value before updation 0
// count value after updation 0
// rendering component 1

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log("Render phase: component is rendering with count", count)

    const handleClick = () =>{
        
        console.log("Before setCount", count)

        setCount(count + 1)

        console.log("Still in trigger phase count is", count)

    }

  return (
    <div>
        <h1>Count : {count}</h1>      
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter


// Updtion in UI is a 3 phase procee
// 1. trigger phase
// 2. render pahse
// 3. commit phase

// 1.trigger phase: happens the moment you call state setter function, here react creates a list of components
//that need to be re rendered

// 2. render phase: this is where react calls your functional component again , (but the ui is not updated here)

// 3. commit phase: react takes the changes calculated during the render phase and applies it to the DOM

// Note: the value inside your eventlistner will always be the previous value in the above example