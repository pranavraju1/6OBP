// rafce to get boiler plate of component


const JsInJsx = () => {

    // single variable
    let name = "pranav";

    // multiple values
    let item = 5;
    let price = 100;

    // element in a variable
    let element = <h3>Total Price is: {item * price}</h3>


    // function in JSX
    function getGreetings(hour) {
        if(hour < 12) return "Good Morning"
        if(hour < 18) return "Good Afternoon"
        return "Good Evening"
    }

    // boolen in JSX
    let isLogedIn = true;

    // /Array in JSX
    let students = ['Alice', 'Bob', 'Charlie'];

    // Setting attributes
    let imgUrl = "https://images.unsplash.com/photo-1761839257658-23502c67f6d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let altText = "Profile Picture";
    let disabledPropt = true;


    // CSS in JSX
    let customStyles = {
        color: "red", backgroundColor: "aqua", fontSize: "20px"   
    }

  return (
    <div>
        <h1>My name is {name}</h1>  
        <h2>Total Price is: {item * price}</h2>
        {element}
        <h2>{getGreetings(14)}</h2>

        <div>
            {isLogedIn ? <h1>Welcome Back {name} </h1> : <h1>Please Login!</h1>}
        </div>

        <ul>
            {/* <li>{students[0]}</li>
            <li>{students[1]}</li>
            <li>{students[2]}</li> */}

            {
                students.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
        </ul>

        <img src={imgUrl} alt={altText} />
        <button disabled={disabledPropt}>Click Me Button</button>

        {/* you cannot inline style in JSX the way we did in HTML  */}
        {/* <div style="color: red; background-color: blue;">Text</div> */}

        {/* styles in JSX should be passed as an object where key(calmelCase) is the style and value is in string  */}
        <div style={{color: "red", backgroundColor: "aqua", fontSize: "20px"}}>Text</div>
        
        <div style={customStyles}>Text 2</div>


    </div>
  )
}

export default JsInJsx
