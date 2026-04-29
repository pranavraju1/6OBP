// always pass the reference to your function inside your onCLick
// if you call the func inside onClick it will automatically run 
// when the component renders on the page



const Listner = () => {

    function handleCLick(){
        alert("like button is clicked")
    }


  return (
    <div>
        <button onClick={handleCLick}>Like</button>

        <button onClick={()=> alert("like 2 button is clicked")}>Like2</button>

        <input type="text" onChange={(e)=>console.log(e.target.value)} />

        

    </div>
  )
}

export default Listner
