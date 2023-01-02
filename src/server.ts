import express from "express";
import mongoose from "mongoose";

import userRoute from "./api/routes/users";
import categoryRoute from "./api/routes/categories";
import spendingRoute from "./api/routes/spendings";

const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://sivams20:siv_admin@expensetrackcluster.lvlsc.mongodb.net/tracker?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database !!");
  })
  .catch((err) => {
    console.log("Connection failed!" + err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/spending", spendingRoute);
