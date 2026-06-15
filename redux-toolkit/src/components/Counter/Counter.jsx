import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy, decrementBy } from "./counterSlice"


const Counter = () => {
  
  const count = useSelector(state=>state.counter.count)
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {count}</h3>      
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(incrementBy(5))}>Increase by 5</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      <button onClick={()=>dispatch(decrementBy(5))}>Decrease by 5</button>
    </div>
  )
}

export default Counter
