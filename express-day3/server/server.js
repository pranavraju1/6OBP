import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173"
    })
)

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

const products = [
    {id:1, name: "Mobile", price: "10000"},
    {id:2, name: "Laptop", price: "20000"},
    {id:3, name: "Mouse", price: "2000"},
]


app.get('/', (req, res)=>{
    res.send("home route")
})

app.get("/api/hello", (req, res)=>{
    res.json("Hello world")
})

app.post("/api/product", (req, res) =>{
    const {name, price} = req.body;
    console.log(name, price)
    res.send("all good")
})


app.get("/api/products", (req, res)=>{
    res.json(products);
})

app.post("/api/product-ui", (req, res)=>{
    const {name, price} = req.body;
    console.log(name, price);

    let obj = {
        id: products.length + 1,
        name:name,
        price: price
    }

    products.push(obj)


    res.send(products);
})


//1. when my page loads i want to see all the products name and price on the my screen in a list
//2. i want to add products to the list where i enter name and price which will add the product
// in the server and also reflect it in the screen