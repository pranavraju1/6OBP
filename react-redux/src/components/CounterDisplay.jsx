import { useSelector } from "react-redux";

const CounterDisplay = () => {     
  const {counter} = useSelector(state=>state)

    return (
    <div>
      <h2>Count: {counter.count}</h2>
    </div>
  );
}

export default CounterDisplay
