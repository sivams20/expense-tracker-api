import express from "express";
import * as spendingController from "../controllers/spending";
import checkAuth from "../middlewares/check-auth";

const router = express.Router();

router.post("/add", checkAuth, spendingController.add_spending);
router.get("/spendings", checkAuth, spendingController.fetch_spendings);
router.get("/spending/:id", checkAuth, spendingController.fetch_spending);

export default router;
