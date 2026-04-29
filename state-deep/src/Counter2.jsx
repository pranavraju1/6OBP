import { useState } from "react";


const Counter2 = () => {
    const [count, setCount] = useState(0);

    console.log("Render phase count", count)

    const handleClick = () =>{
        
        setCount(count + 1)
        console.log("count value in setCount(count + 1)", count)

        setCount(count + 5)
        console.log("count value in setCount(count + 5)", count)

        setCount(count + 10)
        console.log("count value in setCount(count + 10)", count)

        // even for async operation the value of count is the previous one
        setTimeout(()=>{
            console.log("value of count after 2 sec", count)
        },2000)

    }

  return (
    <div>
        <h1>Count : {count}</h1>      
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter2


// in the aboce example the starting 2 updation are not excecuted
// throught the trigger phase the value of count is 0

// setCount( 0 + 1) -> upadted value is 1
// setCount( 0 + 5) -> upadted value is 5
// setCount( 0 + 10) -> upadted value is 10