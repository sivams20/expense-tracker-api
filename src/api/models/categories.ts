import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true }
});

export default mongoose.model('Category', categorySchema);
