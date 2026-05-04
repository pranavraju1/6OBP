import { useState } from "react"
import Counter from "./Counter"

const Parent = () => {
    const[toggle, setToggle] = useState(true);

  return (
    <div>
        <button onClick={()=>setToggle(prev => !prev)}>Toogle</button>
        
        {
            toggle && <Counter/> 
        }
              
    </div>
  )
}

export default Parent
