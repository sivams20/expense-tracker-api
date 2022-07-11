import express from 'express';
import mongoose from "mongoose";

import userRoute from './api/routes/users';

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/user', userRoute);
