// F = ((C * 9)/5) + 32

import { useReducer } from "react"


const initialState = {
    celsius: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "change":
            return{...state, celsius: action.payload}
        default:
            return state
    }
}

const TemConversion = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // F = ((C * 9)/5) + 32

    const fahrenheit = ((state.celsius*9)/5 + 32);

  return (
    <div>
      <input 
      type="number" 
      placeholder='enter temp in Celsius' 
      onChange={(e) => dispatch({type: "change", payload: Number(e.target.value)})} 
      />
      <h3>Celsius:{state.celsius}</h3>
      <h3>Fahrenheit:{fahrenheit}</h3>
    </div>
  )
}

export default TemConversion
