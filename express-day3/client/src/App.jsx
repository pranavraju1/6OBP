import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
      try{
        const res = await axios.get("http://localhost:4000/api/products")
        console.log(res.data)
        setProducts(res.data)
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    fetchProducts();
  },[])


  const handleClick = async() => {
    try{
      const res = await axios.get("http://localhost:4000/api/hello")
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }
  const handleSendData = async() => {
    try{
      const res = await axios.post("http://localhost:4000/api/product",{
        name: "headphone", 
        price: 2000
      })
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    let obj = {
      name:e.target.name.value,
      price:e.target.price.value
    }

    try{
      const res = await axios.post("http://localhost:4000/api/product-ui",obj)
       fetchProducts();
      console.log(res.data)
    }catch(err){
      console.log(err)
    }

  } 


  return (
    <div>
      <button onClick={handleClick}>Connecting with server</button>

      <button onClick={handleSendData}>Send Data from client</button>

      <ul>
        {
          products.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>


      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter product name"  />
        <input type="number" name="price"  placeholder="enter product price"/>
        <button type="sumbit">Add Product</button>
      </form>

    </div>
  )
}

export default App
