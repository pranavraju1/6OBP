import {  useRef } from "react";

const FocusInput = () => {
  
  const inputRef = useRef(null);
  console.log(inputRef)
//   useEffect(()=>{
//     inputRef.current.focus();
// // or
//     let element = document.getElementById("test");
//     element.focus();
//   },[])
  return (
    <div>
      <input type="text" id="test" />      
    </div>
  )
}

export default FocusInput
