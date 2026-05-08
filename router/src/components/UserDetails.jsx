import { useParams } from "react-router"


const UserDetails = () => {
    // let params = useParams();
    // let userID = params.userId

    // OR[]
    let {userId} =  useParams()

    // console.log(params)

  return (
    <div>
        <h3>userID: {userId}</h3>
        <h3>User Details</h3>      
    </div>
  )
}

export default UserDetails
