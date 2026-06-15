import { useMemo, useState } from "react";

function slowFunction(num){
    console.log("slow function is called");
    let result = 0;
    for(let i=0; i<100000000; i++){
        result += i%10;
    }
    return result + num
}

const LaggyApp = () => {
 const [count, setCount] = useState(0);
 const [text, setText] = useState("");
 
//  const value = slowFunction(count);
    const value = useMemo(()=> slowFunction(count),[count]);


    return (
    <div>
        <h2>LaggyApp</h2>
        <button onClick={()=>setCount(c=>c+1)}>Increase Count</button>
        <p>Computed value: {value}</p>
        <input 
        type="text" 
        value={text} 
        onChange={e=>setText(e.target.value)} />
        <p>Text: {text}</p>
    </div>
  )
}

export default LaggyApp


// useMemo -> this react hook is used to cache expensive
//  calculation/values (during component re-renders) based on the dependecy 

// react react will only compute the value when it is necessary
// Note: if you leave the dependecy array empty it will only run once