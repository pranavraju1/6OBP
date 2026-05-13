import { useRef, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    console.log("component is rendering")
    renderCount.current++;

  return (
    <div>
        <h2>Count count: {count} </h2>     
        <h2>Ref count: {renderCount.current}</h2>    
        <button onClick={()=>setCount(prev => prev + 1)}>Increase count</button>  
    </div>
  )
}

export default Counter
// everytime count changes the components re-renders
// renderCount.current keeps increasing bc the ref value persists.
// that is renderCount.current value survives renders w/o causing them
// Note: ref updates do not trigger re-renders