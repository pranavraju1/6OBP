import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import AdminArea from "./AdminArea"
import CourseArea from "./CourseArea"

const Dashboard = () => {
    
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
    <div style={{display: "flex", gap : "2rem"}}>

        <h3>Theme value : {theme}</h3>
      <button onClick={()=>toggleTheme()}>Toggle Theme</button>

      <CourseArea/>
      <AdminArea/>
    </div>
  )
}

export default Dashboard
