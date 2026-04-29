// props which is short for properties are values that are passed from a parent component to a child component
// props helps components to communicate with each other
// they are like args to a function


// this is default parameter and it only works if no property or undefined is
// passed from parent to child. If we pass null or 0 this wont work
const Greet = ({name = "Anonymus"}) => {

    // console.log(prop) //{name: "pranav"}

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default Greet
