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

const fetch_spendings = (req, res, next) => {
  const userId = req.userData.userId;
  Spending.find({ userId })
    .select("date amount note category")
    .exec()
    .then((result) => {
      const response = {
        spendings: result,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export { add_spending, fetch_spendings };
