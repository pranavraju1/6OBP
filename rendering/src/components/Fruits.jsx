// when you render a list of elements, you need to add a key prop to each element 
// with a unique value within the list

// a. if your data is comming from the data base, you can use the database keys/Ids, which are unique in nature
// b. if your data is created locally use an increment counter/ crypto.randomUUID() or package like uuid

// Rules of keys
// 1. the key prop must go to the outermost repeated element
// 2. key is a special prop that react uses internally. Its not a pop that you can pass
// to a child component and destructure it

// Efficient Rendering: React uses unique keys to identify which item in a list have changed, 
// been added or removed. This allows only the specefic DOM nodes that need modification rather
// than re-rendering the entire list







const Fruits = () => {

    const categories = [
        {id: 1, name: "Fruits", itmes:["Apple", "Banana", "Orange"]},
        {id: 2, name: "Vegetables", itmes:["Carrot", "Brocoli"]},
        {id: 3, name: "Dairy", itmes:["Milk", "Cheese"]},
        {id: 4, name: "Electronics", itmes:["Mobile", "Laptop", "Mouse"]},
    ]
  return (
    <div>


      {/* <div>
            <h3>Fruits (3)</h3>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
      </div> */}


      {categories.map((item)=>(
        <div key={item.id}>
            <h3>{item.name} ({item.itmes.length})</h3>
            <ul>
                {item.itmes.map((innerIntems)=>(
                    <li key={innerIntems}>{innerIntems}</li>
                ))}
            </ul>
        </div>
      ))}


    </div>
  )
}

export default Fruits
