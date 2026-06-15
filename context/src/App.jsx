import { useState } from "react"
import A from "./components/A"
import { UserContext } from "./context/UserContext"
import { ThemeContext } from "./context/ThemeContext"


const App = () => {

  const [username, setUserName] = useState("pranav")
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev == "light") ? "dark" : "light");
  }

  // console.log("App is redering")


  return (
    <UserContext.Provider value={username}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        <A />      
      </ThemeContext.Provider>
    </UserContext.Provider>

    
  )
}

export default App
