const CartItem = ({name, price, onOrder}) => {
  return (
    <div>
        <span>{name} - {price}</span>

        {/* this will automatically call the function when the component is loaded */}
        {/* <button onClick={onOrder(name, price)}>Order</button> */}


        <button onClick={()=>onOrder(name, price)}>Order</button>


        {/* <Button text={"Order"} onClick={()=>onOrder(name, price)}/> */}



    </div>
  )
}

export default CartItem
