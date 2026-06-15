import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import Todo from "./components/Todo";


const App = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Counter</h1>
      <CounterDisplay />
      <CounterButtons />
      <Todo/>
    </div>
  );
};

export default App;
