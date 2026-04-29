// task when the form is submited show value in console
import { useState } from "react"

const Question = () => {

    const [formData, setFormData] = useState({
        email: "",
        password:""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" 
        name="email" 
        value={formData.email} 
        onChange={(e)=>setFormData({...formData, email: e.target.value})} 
        placeholder="Enter Email" />
      <input type="password" 
        name="password" 
        value={formData.password} 
        onChange={(e)=>setFormData({...formData, password: e.target.value})} 
        placeholder="Enter Password" />
      <button type="subit">Submit</button>
    </form>
  )
}

export default Question
