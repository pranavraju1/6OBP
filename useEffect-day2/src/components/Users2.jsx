import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/users?name_like=L

const Users2 = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        //  .then((res)=> res.json())
        //  .then((data)=> setUsers(data))   

        const fetchData = async() =>{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await res.json()
                setUsers(data)
        }
        fetchData()
    },[])

    const handleChange = async(e) =>{
        setName(e.target.value)
        let res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`);
        let data = await res.json();
        console.log("data", data)
        setUsers(data);
    }

    // Ṇote: avoid using useEffect when you can espesically when it comes to component updation using events
    // this is so that you can have a cleaner code to maintain and debug
     
  return (
   <div>
      <h1>Users2</h1>
      <input type="text" placeholder="enter user name" onChange={handleChange}/>
      <ul>
        {users.map( (item, id) => (<li key={id}>{item.name}</li>) )}
      </ul>
    </div>
  )
}

export default Users2
