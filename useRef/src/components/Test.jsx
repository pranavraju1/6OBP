import { useEffect, useRef } from "react"

const Test = () => {

    const refValue =  useRef(null);

    useEffect(()=>{
     
         refValue.current.focus();
    },[])
    
     const handleClick = () => {
        refValue.current.focus();
    }

  return (
    <div>
      <input ref={refValue} type="text" />
      <br />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  )
}

export default Test

// useRef(null) -> creats a container
// ref={refValue} -> connects the DOM input to that container
// after render inputRef.current points to that input element
// calling focus() directly acts on the DOM node
