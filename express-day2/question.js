// const students = [
//     { id: 1, name: 'Aarav' },
//     { id: 2, name: 'Diya' }
// ]


//  /students -> show obj on screen
//  /students/1 -> shows details of student 1
//  /students/5-> student not found

//  /students -> take name input from user and check if its is empty, 
// if not add it in the original obj and send the response of the new obj 


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

const students = [
    { id: 1, name: 'Aarav' },
    { id: 2, name: 'Diya' }
]


app.get('/students', (req, res) => {
    res.json(students)
})



app.get('/students/:id', (req, res) => {

    const student = students.find(s => s.id === Number(req.params.id))

    if (!student) {
        return res.status(404).json({ message: 'Student not found' })
    }
    res.json(student)
})


app.post("/students", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newStudent = {
    id: students.length + 1,
    name,
  };
  students.push(newStudent);
  res.status(201).json(students);

});

