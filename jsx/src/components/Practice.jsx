import React from 'react'

const Practice = () => {

    // task1: for belo object  
    // if role is admin show "Welcome Adin Pranav"
    // if role is user show "Hi Pranav!"
    // if neither show "Please Login"

    const user = {
        name:"Pranav",
        role:"admin"
    }

    // task 2 show male and female candidates name in a list according to the filter 

    let student = [
        {name: "pranav", gender:'male'},
        {name: "sourav", gender:'male'},
        {name: "pragya", gender:'female'},
        {name: "aishwarya", gender:'female'},
    ]

    let genderFilter = "female"



  return (
    <div>
      {user.role == "admin" ? (
        <h1>Welcome Adin {user.name}</h1>
      ) : user.role == "user" ? (
        <h1>Hi {user.name}!</h1>
      ) : (
        <h1>Please Login</h1>
      )}

      <ul>
        {
            student.filter(item=>{
                if(item.gender == genderFilter) return item  
            }).map((i)=>(<li key={i}>{i.name}</li>))
        }
      </ul>
    </div>
  );
}

export default Practice
