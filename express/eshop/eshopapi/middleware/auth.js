

import jwt from "jsonwebtoken";
export const verifyToken= async (request,responce,next)=>{
    try{
        let tokenString = request.headers.authorization;
        let token = tokenString.split(" ")[1];
        jwt.verify(token,'qwertyuiopasdfghjklzxcvbn');
        next();

    }
    catch(err){
        return response.status(401).json({error:"unauthorized user"});
    }
}