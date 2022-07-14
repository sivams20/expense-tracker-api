import express from "express";
import * as userController from '../controllers/user';

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signIn);

export default router;
