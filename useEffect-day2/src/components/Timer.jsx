import { useEffect, useState } from "react"

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null)
    // let intervalId = null;

    const startTimer = () => {
        if(!intervalId){
            let tempId = setInterval(()=>{
                setSeconds(prev => prev + 1)
            },1000)   
            setIntervalId(tempId);   
        }
    }

    // useEffect(()=>{
    //      let tempId = setInterval(()=>{
    //             setSeconds(prev => prev + 1)
    //     },1000)   

    //     return ()=>{
    //         clearInterval(tempId)
    //     }
    // },[])

  return (
    <div>
      <h1>Timer: {seconds}</h1>
      <button onClick={startTimer}>Start</button>

    </div>
  )
}

export default Timer
