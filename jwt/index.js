import express from "express";
import bcrypt from "bcrypt";

import {v4 as uuidv4} from "uuid"

import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


const JWT_SECRET = "my-secret-key";



const app = express();



// pretend data
let users = [];

app.use(express.json());
app.use(cookieParser());

app.get("/",(req, res)=>{
    res.send("Api is working")
})

app.listen(5000, ()=>{
    console.log("server is running on PORT: ", 5000)
})

app.post('/register', async(req, res)=>{
    const {email, password} = req.body;
    const exisTingUser = users.find(u => u.email === email);
    if(exisTingUser){
        return res.send("user already exists")
    }

    // hashing PW
    const saltRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltRounds);

    const newUser = {
        id: users.length + 1,
        email,
        passwordHashed
    }
    users.push(newUser),
    res.send({success: true, users})
    
})

app.get('/login-bcrypt', async(req, res)=>{
    const {email, password} = req.body;
    const user = users.find(u=>u.email == email);
    if(!user){
        return res.send("email does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.passwordHashed);
    if(!isMatch){
        return res.send("password is worng")
    }
    res.send("Login successfull using bcrypt")
})


app.get('/login-uuid', async(req, res)=>{
    const {email, password} = req.body;
    const user = users.find(u=>u.email == email);
    if(!user){
        return res.send("email does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.passwordHashed);
    if(!isMatch){
        return res.send("password is worng")
    }

    const tokken = uuidv4();
    user.simpleTokken = tokken;

    res.json({message: "Login successful using token", user})
})

app.get('/login-jwt', async(req, res)=>{
    const {email, password} = req.body;
    const user = users.find(u=>u.email == email);
    if(!user){
        return res.send("email does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.passwordHashed);
    if(!isMatch){
        return res.send("password is worng")
    }

    const payload = {
        sub: user.id,
        email: user.email,
        role: "user"
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '15m'}); 

    res.json({message: "Login successful using token", token})
})

app.get('/login-jwt-cookie', async(req, res)=>{
    const {email, password} = req.body;
    const user = users.find(u=>u.email == email);
    if(!user){
        return res.send("email does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.passwordHashed);
    if(!isMatch){
        return res.send("password is worng")
    }

    const payload = {
        sub: user.id,
        email: user.email,
        role: "user"
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '15m'}); 

    res.cookie('token', token,{
        httpOnly: true, //imp security flag
        secure: false, //make is true in production
        sameSite: 'lax', //CSRF protection
        maxAge: 15*60*1000, //15 minutes
    })

    res.send("Login successfull using cookie")
})

// this is our middleware
function authWithCookie(req, res, next){

    const token = req.cookies.token;

    if(!token){
        return res.send("first login to access this page")
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch{
        return res.send("invalid or expired tokken")
    }
}

// protected route
app.get("/profile-page", authWithCookie, (req, res)=>{
    res.send("user can access this page")
})