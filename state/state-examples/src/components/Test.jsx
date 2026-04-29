import { useState } from "react"

const Test = () => {

    let [city, setCity] = useState("Delhi");

    console.log("test component is rerending")
  return (
    <div>
      <h1>City: {city}</h1>
      <button onClick={()=>setCity("Pune")}>Change City To Mumbai</button>
    </div>
  )
}

export default Test
