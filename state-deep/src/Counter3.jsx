import { useState } from "react";


const Counter2 = () => {
    const [count, setCount] = useState(0);

    console.log("Render phase count", count)

    const handleClick = () =>{
        
        setCount((prev) => prev + 1)    // 0 + 1
        console.log("count value in setCount(count + 1)", count)

        setCount(prev => prev + 5)  // 1 + 5
        console.log("count value in setCount(count + 5)", count)

        setCount(prev => prev + 10) // 6 + 10
        console.log("count value in setCount(count + 10)", count)
    }

  return (
    <div>
        <h1>Count : {count}</h1>      
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter2
