import Button from "./Button"

const AboutUs = () => {

    const handleClick = () =>{
        alert("Message From AboutUs")
    }

  return (
    <div>
      <h2>About Us</h2>
      <Button onClick={handleClick} text={"AboutUs"}/>
    </div>
  )
}

export default AboutUs