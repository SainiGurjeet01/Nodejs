
import { request, response } from "express";
import { User } from "../model/user.model.js";
import { validationResult } from "express-validation";
export const signIn = (request,response,next)=>{
    User.findOne({email: request.body.email,password:request.body.password})
    .then(result=>{
       return  result ? response.status(200).json({massage: "Sign In Success"}) : response.status(401).json({erroe:"Bad Request.."});
    })
    .catch(err=>{
        return response.status(500).json({erroe:"Internal Server Error"});
    });
}
export const singup = async (request,response,next)=>{
    try{
        const errors = validationResult(request);
        if (!errors.isEmpty())
        return response.status(401).json({error: "Bad Request",errors: errors.array() });

    let {email,password,contact} = request.body;
    let user = await User.create({email,password,contact});
    return response.status(201).json({massage:"user Saved",user});

    }
    catch(err){
        return response.status(500).json({error:"Internal Server Error"});
    }
}