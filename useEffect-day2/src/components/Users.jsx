import { useEffect, useState } from "react"

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   
    // useEffect(()=>{
    //     // fetch("https://jsonplaceholder.typicode.com/users")
    //     //  .then((res)=> res.json())
    //     //  .then((data)=> setUsers(data))   

    //     const fetchData = async() =>{
    //         try{
    //             let res = await fetch("https://jsonplaceholder.typicode.com/users");
    //             let data = await res.json();
    //             setLoading(false)
    //             setError(false)
    //             setUsers(data)
    //         }catch(err){
    //             setError(err)
    //             setLoading(false)
    //             setUsers([]);
    //         }
           
    //     }
    //     fetchData();


    // },[])

    const handleCLick = async() => {
      setLoading(true)
       try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await res.json();
            setLoading(false)
            setError(false)
            setUsers(data)
        }catch(err){
            setError(err) 
            setLoading(false)
            setUsers([]);
        }  
    }


  return (
    <div>
      <h1>Users</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ul>
        {users.map( (item, id) => (<li key={id}>{item.name}</li>) )}
      </ul>

      <button onClick={handleCLick}>Fetch Datat</button>
    </div>
  )
}

export default Users
