import { useState } from "react"

const CounterUseState = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(0);
        setStep(1)
    }

    return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Step: {step}</h2>
      <button onClick={()=>setStep(prev => prev + 1)}>Increase Step</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default CounterUseState
