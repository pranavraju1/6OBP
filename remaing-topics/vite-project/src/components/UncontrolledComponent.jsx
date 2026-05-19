import { useRef } from "react"

const UncontrolledComponent = () => {
    const inputRef = useRef();
    
    const handleClick = () => {
        alert(inputRef.current.value)
    } 

  return (
    <div>
        <h2>Uncontrolled Component</h2>
        <input 
            type="text"
            ref={inputRef}    
            placeholder="Enter value"
        />
        <button onClick={handleClick}>Show Name</button>
    </div>
  )
}

export default UncontrolledComponent
