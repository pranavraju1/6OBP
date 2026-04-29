import Counter from "./components/Counter"
import NameInput from "./components/NameInput"
import Profile from "./components/Profile"
import Test from "./components/Test"
import Theme from "./components/Theme/Theme"
import Toggle from "./components/Toggle"


const App = () => {
  return (
    <div>
      <Counter/>      
      <Test/>
      <Toggle/>
      {/* <Theme/> */}
      <Profile/>
      <NameInput/>
    </div>
  )
}

export default App
