import express from "express";

const app = express();
const PORT = 4000;
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Server is running on ports ${PORT}`)
})

app.get("/",(req, res)=>{
    res.send("hello")
})

const movies = [
    {id:1, title: "Inception", genre: "Sci-Fi", watched: true},
    {id:2, title: "Interstellar", genre: "Sci-Fi", watched: true},
    {id:3, title: "ZNMD", genre: "Drama", watched: true},
]


// Not So Good
// Restful princeples
// app.get('/getmovies')
// app.get('/single-movies')
// app.get('/delete-a-movie')

// Better RestDesign
// app.get('/movies')
// app.get('/movies/:id')
// app.post('/movies')
// app.post('/movies/:id')


// Restful routing means thinking in terms of resources such as movies,users etc
// and using HTTP methods to describe actions on those 


app.get("/movies", (req, res)=>{
    res.send(movies)
})

app.get("/movies/:id", (req, res)=>{
    const {id} = req.params;
    const movie = movies.find((item, idx) => item.id == Number(id));
    if(!movie){
        res.status(404).send("movie does not exist")
    }
    res.send(movie)
})

app.post("/movies", (req, res)=>{
    const {title, genre, watched} = req.body;
    const newObj = {
        id: movies.length+1,
        title,
        genre,
        watched
    }
    movies.push(newObj);
    res.send(movies)
})

// Note: you can also add or update data using get method but it is not recomended
// bc it goes against your restful principles, where the method should tell you what the route is doing

// Patch

// app.patch('/movies/:id', (req, res)=>{
//     const {id} = req.params;

//     const movieIndex = movies.findIndex((item, idx) => item.id == Number(id));

    
//     if(movieIndex == -1){
//         res.status(404).send("movie does not exist")
//     }
//      const {title, genre, watched} = req.body;

//      console.log(title, genre, watched)

//      if(title !== undefined){
//         movies[movieIndex].title = title
//      }
//      if(genre !== undefined){
//         movies[movieIndex].genre = genre
//      }
//      if(watched !== undefined){
//         movies[movieIndex].watched = watched
//      }
//      console.log(movies)

//     res.send(movies)

// })

// app.patch('/movies/:id', (req, res)=>{
//     const {id} = req.params;

//     const movieIndex = movies.findIndex((item, idx) => item.id == Number(id));

//     if(movieIndex == -1){
//         res.status(404).send("movie does not exist")
//     }

//     movies[movieIndex] = {
//         ...movies[movieIndex],
//         ...req.body
//     }


//     res.send(movies)

// })


app.put('/movies/:id', (req, res)=>{
    const {id} = req.params;

    const movieIndex = movies.findIndex((item, idx) => item.id == Number(id));

    if(movieIndex == -1){
        res.status(404).send("movie does not exist")
    }

    const {title, genre, watched} = req.body;
    
    const updatedObj = {
        id : id,
        title,
        genre,
        watched
    } 

    movies[movieIndex] = updatedObj

    res.send(movies)

})