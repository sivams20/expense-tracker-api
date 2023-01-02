import express from "express";
import * as spendingController from "../controllers/spending";
import checkAuth from "../middlewares/check-auth";

const router = express.Router();

router.post("/add", checkAuth, spendingController.add_spending);

export default router;
