import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./redux/postAction"
import { useEffect } from "react"



const App = () => {
  const dispatch = useDispatch();
  console.log(useSelector(state=>state))
  const {loading, posts, error} = useSelector(state=>state) 


  useEffect(()=>{
    dispatch(fetchPosts());
  },[])

  return (
    <div>
      
    </div>
  )
}

export default App
