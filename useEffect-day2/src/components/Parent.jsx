import { useState } from "react"
import Timer from "./Timer"


const Parent = () => {

    const [toggle, setToggle] = useState(true)


  return (
    <div>
        {toggle && <Timer/>}
      
      <button onClick={()=> setToggle(prev => !prev)}>Toggle</button>
    </div>
  )
}

export default Parent
