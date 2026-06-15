import { useEffect, useState } from "react"
import { PostContext } from "../context/PostsContext"




const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5" 

const PostsProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true)
            setError(null)
            try{
                const res = await fetch(API_URL);
                if(!res.ok){
                    throw new Error("failed to fetch posts");
                }

                const data = await res.json();
                setPosts(data);
                console.log(data);

            }catch(err){
                setError(err.message || "Unknown Error");
                console.log("error in fetching data", err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])



  return (
    <PostContext.Provider value={{
        posts,
        loading,
        error
    }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostsProvider
