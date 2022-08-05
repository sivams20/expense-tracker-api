import express from "express";
import * as categoryController from "../controllers/categories";

const router = express.Router();

router.post('/add', categoryController.add_category);
router.get('/categories', categoryController.fetch_categories);

export default router;
