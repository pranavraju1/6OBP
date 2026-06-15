import { useState } from "react"
import Dashboard from "./components/Dashboard"
import { ThemeContext } from "./context/ThemeContext"
import { UserContext } from "./context/UserContext"
import PostsProvider from "./provider/PostsProvider"


const App = () => {

  const currentUser = {
    name: "Pranav",
    role: "instructor"
  }
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev == "light" ? "dark" : "light");
  }
  
  return (
    <PostsProvider>
      <UserContext.Provider value={currentUser}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <h1>Context example</h1>
          <Dashboard/>      
        </ThemeContext.Provider>
      </UserContext.Provider>
    </PostsProvider>
  )
}

export default App
