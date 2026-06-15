import { UserContext } from "../context/UserContext"
import AdminPanel from "./AdminPanel"


const AdminArea = () => {
    const adminUser = {
        name: "Admin name",
        role: "admin" 
    }
  return (
    <UserContext.Provider value={adminUser}>
        <h2>Admin Area</h2>
        <AdminPanel/>
    </UserContext.Provider>
  )
}

export default AdminArea
