import { useState } from "react"

const Profile = () => {
    const [user, setUser] = useState({
        name: "pranav",
        age: 20,
        city: "mumbai"
    })
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>city: {user.city}</h3>

      {/* <button onClick={() => setUser({
        name: "pranav",
        age: 20,
        city: "Pune"
    })}>Change city to Pune</button> */}

      <button onClick={() => setUser({...user, city:"Pune"})}>Change city to Pune</button>

      <button onClick={()=>setUser({...user, age: user.age +1})}>Increase Age</button>

      
    </div>
  )
}

export default Profile
