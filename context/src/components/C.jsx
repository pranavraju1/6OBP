import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const C = () => {
    console.log("C component")
    const username = useContext(UserContext); 
  return (
    <div>
        <h2>C Component: {username}</h2>
    </div>
  )
}

export default C;
