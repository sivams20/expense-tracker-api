import express from "express";
import * as categoryController from "../controllers/categories";
import checkAuth from "../middlewares/check-auth";

const router = express.Router();

router.post('/add', checkAuth, categoryController.add_category);
router.get('/categories', categoryController.fetch_categories);
router.post('/delete', categoryController.delete_category);

export default router;
