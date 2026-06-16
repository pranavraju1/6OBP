import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"
import { useEffect } from "react"


const Users = () => {
    console.log(useSelector(state=>state.users))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return (
    <div>
        <h2>Users</h2>
    </div>
  )
}

export default Users
