import CartItem from "./CartItem"

const Cart = () => {

    const handleOrder = (itemName, itemPrice) => {
        alert(`You have orderred ${itemName} for ${itemPrice}`)
    }

  return (
    <div>
        <h2>Cart Items</h2>
        <CartItem name={"Phone"} price={20000} onOrder={handleOrder}/>
        <CartItem name={"Laptop"} price={50000} onOrder={handleOrder}/>
        <CartItem name={"Shirt"} price={2000} onOrder={handleOrder}/>
    </div>
  )
}

export default Cart
