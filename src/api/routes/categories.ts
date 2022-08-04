import express from "express";
import { add_category } from "../controllers/categories";

const router = express.Router();

router.get('/add', add_category);

export default router;
