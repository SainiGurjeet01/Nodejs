import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserRouter from  "./routes/user.routes.js";
import CategoryRouter from "./routes/category.routes.js";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/eshopdb")
.then(()=>{
    app.use("/user",UserRouter);
    app.use("/category",CategoryRouter);
    app.listen(3000,()=>{
        console.log ("Server Is Started..");
    });
}).catch(err=>{
    console.log(err);
    console.log("Database connection Failed ..");
})