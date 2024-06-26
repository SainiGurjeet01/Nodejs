import express,{request, response} from "express";
import db from "../db/dbConfig.js";
const router = express.Router();
router.get("/",(request,response,next)=>{
    return response.render("index.ejs",{currentUser:request.session.currentUserEmail,currentUserId:request.session.currentUserId});
});
router.get("/about",(request,response,next)=>{
    return response.render("about.ejs",{currentUser:request.session.currentUserEmail,currentUserId:request.session.currentUserId});
});
router.get("/sign-in",(request,response,next)=>{
    return response.render("signin.ejs",{currentUser:request.session.currentUserEmail,currentUserId:request.session.currentUserId});
});
router.get("/sign-up",(request,response,next)=>{
    return response.render("signup.ejs",{currentUser:request.session.currentUserEmail,currentUserId:request.session.currentUserId});
});
router.post("/sign-up",(request,response,next)=>{
    db.collection("users").insertOne(request.body)
    .then(result=>{
         return response.redirect("/sign-in");
    }).catch(err=>{
        console.log(err);
    })
});
router.post("/sign-in",(request,response,next)=>{
  let {email,password} = request.body;
  db.collection("users").insertOne({email,password})
  .then(result=>{
    request.session.currentUserId=result._id;
    request.session.currentUserEmail=result.email;
    console.log(request.session.currentUserEmail);
    return result ? response.redirect("/") : response.render("signin.ejs",{message:"Sign In Failed..",currentUser:request.session.currentUserEmail,currentUserId:request.session.currentUserId});
  }).catch(err=>{
    console.log(err);
  })
});
export default router;