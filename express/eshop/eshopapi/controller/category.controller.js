
import { validationResult } from "express-validator";
import { Category, Category } from "../model/category.model";
import { request, response } from "express";

export const saveInBulk = (request,response,next)=>{
    Category.insertMany(request.body)
    .then(result=>{
        return response.status(201).json({message:"All Items Saved"});
    }).catch(err=>{
        return response.status(500).json({message:"Internal Server Error "});
    });
}
export const save = async (request,response,next)=>{
    try{
        let error = validationResult(request);
        if(!error.isEmpty())
        return response.status(401).json({error:"Bad Request|Invaild data",errorMessage:"errors.array()"});
      
      let Category = await Category.create(request.body);
      return response.status(201).json({message:"Category Saved",category});  
    }
    catch(err){
        return response.status(500).json({error:"Internal Server Error"});
    }
}
