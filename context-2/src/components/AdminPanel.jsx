import { useContext } from "react"
import { UserContext } from "../context/UserContext"
 



const AdminPanel = () => {

    console.log("in admin area", useContext(UserContext))
    const {name, role} = useContext(UserContext)

    return (
    <div>
      <p>Current admin: {name}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default AdminPanel
