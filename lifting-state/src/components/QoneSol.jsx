import { useState } from "react"

const QoneSol = () => {
    const [addresses, setAddress] = useState([
        {id:1, city:"", postalCode:""},
    ]);
    const handleClick = () => {

        setAddress((prev)=>[...prev ,  {id:addresses.length + 1, city:"", postalCode:""}])
    }
    const handleSubmit = () => {
        console.log(addresses)
    }

    function handleChange(e,idx){
        let key = e.target.name;
        let value = e.target.value;
        console.log(idx);
        let tempArray = [...addresses];
        tempArray[idx][key] = value;
        setAddress(tempArray)
        // console.log(tempArray)
   
    }

  return (
    <div>
        {
            addresses.map((item, idx)=>(
                <div key={idx}>
                    <input type="text" placeholder="city" name="city" onChange={(e)=>handleChange(e,idx)}/>
                    <input type="text" placeholder="postal code" name="postalCode" onChange={(e)=>handleChange(e,idx)}/>
                </div>
            ))
        }

        <button onClick={handleClick}>Add Address</button>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default QoneSol
