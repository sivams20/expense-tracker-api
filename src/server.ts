import express from 'express';
import mongoose from "mongoose";

const app = express();
const port = 5000;

app.listen(port, ()=>{
    console.log(`Connected successfully on port ${port}`);
});

mongoose.connect('mongodb+srv://sivams20:siv_admin@expensetrackcluster.lvlsc.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connected to database !!');
}).catch((err) => {
    console.log('Connection failed!' + err.message);
});