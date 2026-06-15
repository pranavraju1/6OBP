import { useContext } from "react"
import C from "./C"
import { ThemeContext } from "../context/ThemeContext"


const B = () => {
    console.log("B component")
    const {theme, toggleTheme} =  useContext(ThemeContext)

  return (
    <div>
        <h3>Theme: {theme}</h3>
        <button onClick={()=>toggleTheme()}>Toggle Theme</button>
        <C/>      
    </div>
  )
}

export default B
