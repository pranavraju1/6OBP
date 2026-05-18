import express from "express";

const app = express();

const PORT = 4000;

let isAdmin = true;


//this is a middleware which is used to convert the JSON data comming from client 
app.use(express.json());

// app.use(middleware)

function middleware(req, res, next){
    console.log("this is a global middleware")
    next();
}

function checkAdmin(req, res, next){
    if(!isAdmin){
        res.status(401).send("Not Admin")
    }
    next();
}

app.listen(PORT, ()=>{
    console.log(`Server is running on ports ${PORT}`)
})

app.get('/', middleware, (req, res)=>{
    res.send("Server is running on this page")
})

app.get('/admin', checkAdmin, (req, res)=>{
    res.send("Welcome Admin")
})



// if you have multiple requests with the same route the 1st route only hits
app.get('/about', (req, res)=>{
    res.send("this is about page1")
})

app.get('/about', (req, res)=>{
    res.send("this is about page2")
})



app.get('/hello', (req, res)=>{
    res.send(`<h1>Hello world</h1>`)
})
app.get('/hello1', (req, res)=>{
    res.send({greet: "hello"})
})



// if you want to have a specefic route mention it before the dynamic route
// as the preference here is given to the one written 1st
app.get('/users/pranav', (req, res)=>{
    res.send("pranav")
})

app.get('/users/:id', (req, res)=>{
    res.send("dynamic routing in express")
})



// Note: your routs can be same but the method should be different
app.post('/user', (req, res)=>{
    const {name, age, city} = req.body
    if(age<18){
        res.status(401).send("user not autherized")
    }
    res.send("post req testing")
})

app.post('/user/:userId', (req, res)=>{

    const {userId} = req.params;

    console.log(userId)

    res.send("OK")
})
