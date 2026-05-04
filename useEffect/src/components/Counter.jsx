// useEffect is used to run side effects in react functional components

// Mounting:  Leave your dependency array empty
// Updating: specify the variable/state inside your dependency array
// Unmounting: return a callback func inside you useEffect which gets executed when component is unmounted
import { useEffect, useState } from "react"

const Counter = () => {
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);

    // console.log("Fetching Data from backend");

    useEffect(()=>{
           console.log("Fetching Data from backend");


            return ()=>{
                console.log("clening up my component")
            }
    },[])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase count 1</button>
      <h2>Count2: {count2}</h2>
      <button onClick={()=>setCount2(prev => prev + 1)}>Increase count 2</button>
    </div>
  )
}

export default Counter;
