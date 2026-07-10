const express = require("express")
const cron = require("node-cron");

const app = express();

cron.schedule("24 14 * * *", ()=>{
    console.log("Corn in running in 2:24");
})

app.get("/",(req,res)=>{
    res.send("Node corn demo")
})

app.listen(5000, ()=>{
    console.log("Server is running on PORT: ", 5000)
})