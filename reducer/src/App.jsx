// useReducer is a React hook used for state management.
//  It is an alternative to useState and is ideal for handling complex state logic

import CounterUseReducer from "./componets/CounterUseReducer"
import CounterUseState from "./componets/CounterUseState"
import TemConversion from "./componets/TemConversion"
import UserForm from "./componets/UserForm"


const App = () => {


  return (
    <div>
      {/* <CounterUseState/>       */}
      {/* <CounterUseReducer/> */}
      {/* <TemConversion/> */}
      <UserForm/>
    </div>
  )
}

export default App
