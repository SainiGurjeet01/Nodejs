

import express from "express";
const app = express();

app.get ("/home",(request,response,next)=>{
   console.log("/home route");
   return response.send("Home Page");
});

app.get("/about",(request,response,next)=>{
    return response.send("About Page");
});

app.get("/contact",(request,response,next)=>{
    return response.send("Contact Page");
});

app.get("/add",(request,response,next)=>{
    let a = request.query.a*1;
    let b = request.query.b*1;
    return response.send("Addition :"+(a+b));
});

app.post("/sub",(request,response,next)=>{
    return response.send("Subtraction");
});

app.use((request,response,next)=>{
   console.log("executed...");
});

app.listen(3000,()=>{
    console.log("Server Executed");
});