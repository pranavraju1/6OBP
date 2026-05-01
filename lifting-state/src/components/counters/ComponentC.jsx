import CounterD from "./CounterD"

const ComponentC = ({count, setCount}) => {
  return (
    <div>
        <h1>Component C</h1>
        <CounterD count={count} setCount={setCount}/>
    </div>
  )
}

export default ComponentC
