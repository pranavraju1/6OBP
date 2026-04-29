// the below rendering output will only run 1 time even tho multiple states are updating
// this is known as batching
// 1. react waits until your event handlers finishes
// 2. gathers all your state updates
// 3. applies then in one render


import { useState } from "react"

const Test = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  const [isActive, setIsActive ] = useState(false);

  console.log("rendering components")

  const handleClick = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 5)
    setCount((prev) => prev + 10)

    setName("Upated");

    setIsActive(true);
  }



  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Name: {name}</p>
      <p>{isActive ? "Yes" : "No"}</p>
      <button onClick={handleClick}>Update all three</button>
    </div>
  )
}

export default Test
