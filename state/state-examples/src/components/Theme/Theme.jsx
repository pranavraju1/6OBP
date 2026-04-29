

import { useState } from 'react'
import './styles.css'

const Theme = () => {

    const [toggle, setToggle] = useState(true);
    
  return (
    <div>
    <button onClick={()=>setToggle((prev) => !prev)}>Toggle Theme</button>

      <div className={toggle ? "container redTheme" : "container pinkTheme"}>

      </div>
    </div>
  )
}

export default Theme
