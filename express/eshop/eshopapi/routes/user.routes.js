
import express from "express";
import {signUp,signIn} from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",body("email","Invalid email Id").isEmail(),

body("email","Email not Empty").notEmpty(),
body("password","PassWord Must Be Valid  Or Requried ").notEmpty(),
body("contact","Only Digit Can Be Allowed").isNumeric(),signUp);

router.post("/signin",signIn);
export default router;