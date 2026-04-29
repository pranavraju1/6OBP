import { useState } from "react"

const NameInput = () => {

  const [name, setName] = useState("");    
  const [users, setUsers] = useState([]);

  function handleClick(){
    if(name.trim() == "") return;

    setUsers([...users, name]);

    setName("");

  }


  return (
    <div>
      <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleClick}>Enter user</button>

      <ul>
        {users.map((item, id)=><li key={id}>{item}</li>)}
      </ul>
      
    </div>
  )
}

export default NameInput
