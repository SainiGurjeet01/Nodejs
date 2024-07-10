import { Product } from "../model/product.model.js";
export const saveInBulk = (resquest,responce,next)=>{
    Product.insertMany(request.body)
    .then(result=>{
        return responce.status(201).json({message: "Data Saved.."});

    }).catch(err=>{
        console.log(err);
        return responce.status(500).json({error:"Internal Server Error"});
    })
};
export const getProductList = (request,responce,next)=>{
    Product.find()
    .then(result=>{
        return responce.status(200).json({products: result});
    }).catch(err=>{
        return responce.status(500).json({error:"Internal Sever Error"});

    })
}