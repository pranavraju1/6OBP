// 1. Only call the hook at the top of the function component
//   a. not inside loops, conditions, try catch eventhandlers, fucntions etc

// 2. only call hooks from react functions

// Note: React needs to know that every time your component renders, it will call the 
// hooks in the exact same order

import { useState } from "react"

const Hooks = () => {

    const isValid = true
    if(isValid){
        const [count, setCount] = useState(0);
    }


  return (
    <div>
        <h1>count: {count}</h1>      
    </div>
  )
}

export default Hooks
