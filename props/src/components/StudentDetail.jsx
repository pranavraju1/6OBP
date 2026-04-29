import React from 'react'

const StudentDetail = ({name, age, gender, city}) => {

  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <h3>City: {city}</h3>
    </div>
  )
}

export default StudentDetail
