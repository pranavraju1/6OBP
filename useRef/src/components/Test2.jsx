import { useRef } from "react"
const Test2 = () => {

    const paraRef = useRef(null);
    const handleClick = () => {
        paraRef.current.innerText = "Some random text"
    }
    console.log("component rendering")

  return (
    <div>
        <p ref={paraRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, excepturi.</p>
        <button onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default Test2

// Note: updating the useRef does not rerender the component
