import mongoose from "mongoose";
import Spending from "../models/spendings";

const add_spending = (req, res, next) => {
  console.log("spending", req);
  const spending = new Spending({
    _id: new mongoose.Types.ObjectId(),
    userId: req.userData.userId,
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    note: req.body.note,
  });
  console.log(spending);
  return false;
  spending
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Spending added successfully.",
        spending: spending,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

export { add_spending };
