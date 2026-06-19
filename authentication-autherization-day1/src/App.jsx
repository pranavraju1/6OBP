import {Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Signup from "./pages/Signup/Signup"
import Navbar from "./components/Navbar/Navbar"

import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login />} />
      </Routes>   
    </div>
  )
}

export default App
