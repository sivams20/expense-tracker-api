import mongoose from "mongoose";

const { Schema } = mongoose;

const spendingSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  note: { type: String, required: false },
});

export default mongoose.model("Spending", spendingSchema);
