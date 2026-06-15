import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const CourseArea = () => {

    const {name, role} = useContext(UserContext);

  return (
    <div>
        <h2>Course Area</h2>
        <p>Welcome, {name}! Your role is : {role} </p>
    </div>
  )
}

export default CourseArea
