import express from "express";
import IndexRouter from "";
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(se)

app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started.....");
});