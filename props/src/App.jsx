import React from 'react'
import Greet from './components/Greet'
import CartComponent from './components/CartComponent'
import StudentCard from './components/StudentCard'

const App = () => {
  return (
    <div>
      <Greet name="pranav" />
      <Greet name="sourav" />
      <Greet name="aishwarya"/>
      <Greet />

      <CartComponent name={"iphone"} price={52} isAvailable={true} categories={['electronics', 'phone']}/>

      <StudentCard id={5} name={"pranav"} age={20} gender={"male"} city={"pune"}/>

    </div>
  )
}

export default App
