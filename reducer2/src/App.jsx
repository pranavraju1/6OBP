import ComplexState from './components/ComplexState'
import Counter from './components/Counter'
import { CounterProvider } from './context/CounterContext'


const App = () => {
  return (
    <CounterProvider>
      <Counter/>            
    </CounterProvider>
  )
}

export default App
