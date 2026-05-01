// when a parent wants to communicate with the child we pass the porps eg state
// when a child want to communicate with the parent you need to pass a callback function
import { useState } from "react"
const ParentChild = () => {

  const [name, setName] = useState("");
  return (
    <div>
      <InputComponent name={name} setName={setName}/>
      <DisplayComponent name={name}/>
    </div>
  )
}

function InputComponent({name, setName}){
  return(
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
  )
}

function DisplayComponent({name}){
  return(
    <p>value: {name}</p>
  )
}

export default ParentChild
