
import { validationResult } from "express-validator";
import { Category } from "../model/category.model.js";


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
export const getCategory = async(request,response,next)=>{
    let id = request.params.id;
    try{
        let category = await Category.findOne({_id:id});
        return category ? response.status(200).json({category}): response.status(404).json({error:"Resource not found | is not found"});
    }
    catch (err){
        return response.status(500).json({error:"Internet Server Error "});
    }
}
export const getCategoryList =(request,response,next)=>{
    Category.find()
    .then(result=>{
        return response.status(200).json({CategoryList:result});
    }).catch(err=>{
        return response.status(500).json({error:"Internet Server Error"});
    });

}
export const deleteCategory =  (request,response,next)=>{
    let id = request.params.id;
    Category.deleteOne({_id:id})
    .then(result=>{
        return response.status(200).json({message:"Category Deleted Successfilly"});
    }).catch(err=>{
        return response.status(500).json({error:"Invaild Error"});
    })
}