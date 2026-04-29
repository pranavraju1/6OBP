import CardWrapper from "./components/CardWrapper"
import Fruits from "./components/Fruits"
import Listner from "./components/Listner"
import Parent from "./components/Parent"
import Test from "./components/Test"

const App = () => {
  return (
    <div>
      <CardWrapper title={"User Profile"}>
        <p>Pranav</p>
        <p>pranav@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>

      <Parent/>

      <Test />

      <Fruits/>      
      
      <Listner/>


    </div>
  )
}

export default App
