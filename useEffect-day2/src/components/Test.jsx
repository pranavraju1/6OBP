import { useEffect, useState } from "react"

const Test = () => {
  const [count, setCount] = useState(0);

  console.log("1. component is rendering", count)
  
  useEffect(()=>{
    console.log("4. inside useEffect", count)

    return () => {
      // here the value of the state will be the previous value
      console.log("3 .inside return func", count)
    }
  },[count])

  console.log("2. outside useEffect",count)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(prev => prev +1)}>Increase</button>
    </div>
  )
}

export default Test
