import Button from "./Button"

const Contact = () => {

    const handleClick = () =>{
        alert("Message From Contact")
    }

  return (
    <div>
      <h2>Contact Us</h2>
      <Button onClick={handleClick} text={"Contact"}/>
    </div>
  )
}

export default Contact
