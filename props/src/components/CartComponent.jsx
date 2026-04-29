import React from 'react'

const CartComponent = ({name, price, isAvailable, categories}) => {

    // console.log(props)

    // obj destructuring
    // let user = {name: "pranav", age: 20};   
    // let {name, age} = user;

  return (
    <div>
      <h3>Item name: {name}</h3>
      <h3>Item Pice: {price}</h3>
      {isAvailable ? <h3>Product is available</h3> : <h3>Product is not available</h3>}
      <h3>Categories: {categories.join(', ')} </h3>
    </div>
  )
}

export default CartComponent
