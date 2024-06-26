import express from "express";
import IndexRouter from "./routes/index.route.js";
import bodyParser from "body-parser";
import session from "express-session";
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({secret:'abcdefghijklmnopq'}));

app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started.....");
});