import { useState } from "react"

const Toggle = () => {

    const [toggle, setToggle] = useState(true)

    // const hanldeToggle = () =>{
    //     if(toggle){
    //         setToggle(false)
    //     }else{
    //         setToggle(true)
    //     }
    // }

    console.log("toggle componet is re rendering")

  return (
    <div>
        {toggle && <h1>Toggle Component</h1>}

        <button onClick={()=>setToggle(prev => !prev)}>Toggle</button>
    </div>
  )
}

export default Toggle
