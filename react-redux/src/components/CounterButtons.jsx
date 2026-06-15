import { useDispatch } from "react-redux"
import { decrement, increment, incrementBy } from "../redux/counterAction"


const CounterButtons = ()  => {
  const dispatch = useDispatch();
  return (
    <div style={
      { 
        display: 'flex',
        gap: '10px', 
        marginTop: '10px',  
        justifyContent: 'center'
        }
      }>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementBy(5))}>Increment By 5</button>
    </div>
  )
}

export default CounterButtons
