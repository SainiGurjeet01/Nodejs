import express,{request, response} from "express";
import db from "../db/dbConfig.js";
const router = express.Router();
router.get("/",(request,response,next)=>{
    return response.render("")
})