import React, { useCallback, useState } from "react";


const Child = React.memo(function Child({onClick, label}){
    console.log("Child rendered: ", label);
    return <button onClick={onClick}>{label}</button>
});


const ParentWithoutCallback = () => {
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)


    // const handleIncrement = () => setCount(c => c+1);
    // const handleOther = () => setOther(o => o+1);

    const handleIncrement = useCallback(()=>{
        setCount(c => c+1)
    },[]);
    const handleOther = useCallback(()=>{
        setOther(o => o+1)
    },[]);


    return (
    <div>
      <h2>Parent without callback</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <Child onClick={handleIncrement} label="Increment Count"/>
      <Child onClick={handleOther} label="Increment Other"/>
      <button onClick={()=>setCount(c => c+1)}>Parent</button>
    </div>
  )
}

export default ParentWithoutCallback



// Rect.memo -> is a HOC used to optimize performance by skipping the components rerender 
// if its props have not changed 
// By default, when a parent component upadates, React recursively re-renders all of its child components
// Wrapping in memo forces react to cache the rendered output and reuse unless incoming properties change


//useCallback -> is used to cache(memoize) a function defination between component-rerenders
// By default react recreates every inline function inside a component during single render
// useCallback stops this recreation by preserving a stable function reference 
// unless its specified dependecy changes

// Note: what is the different between useMemo and useCallback
// useMemo memoizes the value (result of a function), while useCallback memoizes 
// the fucntion itself (its reference)