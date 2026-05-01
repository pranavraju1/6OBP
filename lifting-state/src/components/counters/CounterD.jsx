
const CounterD = ({count, setCount}) => {
  return (
     <div>
      <h1>CounterD</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default CounterD
