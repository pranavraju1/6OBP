import { useState } from "react";

const UserCard = ({ name, course }) => {

  const [isPresent, setIsPresent] = useState(false);

  return (
  <div>
    <h3>{name}</h3>
    <p>Course: {course}</p>
    <p>Status: {isPresent ? "Present" : "Absent"}</p>
    <button onClick={() => setIsPresent(!isPresent)}>
      Toggle Attendance
    </button>
  </div>
  )
}

export default UserCard
