
const CounterA = ({count, setCount}) => {
    console.log("CounterA is rerendering")
  return (
    <div>
      <h1>CounterA</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default CounterA
