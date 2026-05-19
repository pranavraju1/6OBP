import { useState } from "react"

const ControlledComponents = () => {

    const [name, setName] = useState();
  return (
    <div>
      <h2>Controlled Component</h2>

      <input 
        type="text"
        onChange={(e) => setName(e.target.value) }
        value={name} 
        placeholder="Enter name"
      />
      <h3>Live Preview: {name}</h3>
    </div>
  )
}

export default ControlledComponents


// Controlled component is a form input whose value is driven by react state, usually
// through a value property an onchange handler.

// An uncontrolled component stores its current value in the DOM itself
//and react typically reads it with ref when needed 

// Note: most of the time you are going to use controlled components 
// just in specefic cases you will use uncontrolled component
// for exmaple: you want to display the value of input in UI w/o rerender using useRef