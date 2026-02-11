import express from 'express';

const app = express();
const PORT = 3000;

const students = {};
let currId = 1;

app.use(express.json());

//read
app.get("/student", (req, res) => {
    res.json(students);
});

app.get("/student/:id", (req, res) => {
    const student = students[req.params.id];
    
    if (!student) {
        return res.status(404).send("Student not found");
    }
    
    res.json(student);
})

//create
app.post("/student", (req, res) => {
    const id = currId++;
    const newStudent = {
        name: req.body.name,
        age: req.body.age,
        course: req.body.course,
        year: req.body.year
    };
    students[id] = newStudent;
    res.json(students[id]);
});


//update
app.patch("/student/:id", (req, res) => {
    const id = req.params.id;
    const oldStudent = students[id];

    //check for non-existence
    if (!oldStudent) return res.status(404).send(`Student not found`);

    students[id] = {...oldStudent, ...req.body};
    res.json(students[id]);
});

//delete
app.delete("/student/:id", (req, res) => {
    const id = req.params.id;
    if (!students[id]) {
        res.send("Student not found")
    }
    delete students[id];
    res.send("Student Deleted");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});