import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

//create
app.post();

//read
app.get();

//update
app.patch();

//delete
app.delete();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});