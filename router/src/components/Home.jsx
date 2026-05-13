import { useNavigate } from "react-router"
// useNavigate -> Returns a function that lets you navigate in your application

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1>Home</h1>     
        <button onClick={() => navigate('order-summary')}>Product Details</button> 
    </div>
  )
}

export default Home
