
const CounterB = ({count, setCount}) => {
  return (
   <div>
      <h1>CounterB</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default CounterB
