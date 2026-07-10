const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res)=>{
    res.send("Home Route")
})

app.get("/slow-page", (req, res)=>{
    for(let i=0; i<6000000000; i++){} // blocing the route 
    res.send("This is a slow page")
})

app.listen(5000, ()=>{
    console.log("Server is running on PORT: ", 5000)
})
