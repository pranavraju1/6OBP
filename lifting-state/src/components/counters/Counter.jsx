import { useState } from "react"
import ComponentC from "./ComponentC"
import CounterA from "./CounterA"
import CounterB from "./CounterB"


const Counter = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
        <CounterA count={count} setCount={setCount}/>      
        <CounterB count={count} setCount={setCount}/> 
        <ComponentC count={count} setCount={setCount}/>     
    </div>
  )
}

export default Counter


// 1. Data flow in react
// React follows one-way or unidirectional data flow, which means data moves from parent to child component
// through props. When a child needs to effect a parent state, the parent passes a callback func into the child
// and that child calls that func during an event.

// Notes
// Can a child directly modify the prop/state of parent?
// no it can only call the function passed by the parent



// 2.Lifting State up
// When multiple components needs to reflect the same changing data, React recomends moving that 
// state up to their closest common parent.

//3.Prop Drilling 
// Prop Drilling happens when props are passed through several component layers 
// just so that the child can use them.
// This is manageable in small apps but when it comes to big Apps whith complex component structure
// It becomes harder to maintain and read as the intermediate components neither use or need those props.

// Note: what is the solution to prop drilling?
// Context in React (will be covered later)