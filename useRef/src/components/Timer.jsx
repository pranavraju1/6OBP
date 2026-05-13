import { useRef, useState } from "react"

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timerIdRef = useRef(null);

    const startTimer = () => {

        if(timerIdRef.current !== null) return;

        timerIdRef.current = setInterval(()=>{
            setSeconds(prev => prev + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
    }
 
    return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer

// The timer ID is not a part of the UI -> you only need it to start and stop the timer
// useRef is perfect here as it persists and doesn't force renders
// Why not use State here -> bc ID is not something the user needs to see, so rerendering is unnecessary
// Why not store in normal variable -> it will reset on every render

