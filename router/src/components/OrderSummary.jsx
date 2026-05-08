import { useNavigate } from "react-router"


// besides path you can also give integer values to navigate back and front if possible
const OrderSummary = () => {

    const navigate = useNavigate();
  
    return (
    <div>
        <h3>Oreder Details</h3>      
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
