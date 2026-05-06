import { useState } from "react"
import Test from "./Test"


const Parent = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div>
        {
            toggle && <Test/>
        }

        <button onClick={()=>setToggle(prev=> !prev )}>Toggle</button>
              
    </div>
  )
}

export default Parent
