import { useState } from "react"

const Counter = () => {

    // the below function will run as soon as the component renders and only once 
    // this is known as lazy initialization
    // this is useful when you have to do any heavy computation to calculate the initialState 
    // like reading form local storage or fetching data from API
    const [count, setCount] = useState(()=>{
        console.log("callback inside useState");
        return 0
    });
    
    console.log("counter component is rendering")



    function handleIncrease(){
        if(count > 9){
            setCount(0)
        }else {
            setCount(prev => prev + 1)
        }
    }

    function handleDecrease(){
        if(count < 1){
            setCount(10)
        }else {
            setCount(prev => prev - 1)
        }
    }

  return (
    <div>
        <h1>Count: {count}</h1>      
        {/* <button onClick={()=>setCount(count + 1)}>Increase</button> */}

        <button onClick={handleIncrease}> Increase </button>
        <button onClick={handleDecrease}> Decrease </button>

    </div>
  )
}

export default Counter

// create a inifinite counter that is if the counter goes above 10 the value of count should be 0
// and if the counter goes below 0 the value of count should be 10