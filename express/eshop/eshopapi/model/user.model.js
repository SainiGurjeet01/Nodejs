
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email:{
      type: String,
      required: true,
      trim: true 
   },
   password:{
      type: String,
      required: true
   },
   contact:{
      type: Number,
      required: true
   }

},{versionKey:false});
export const User = mongoose.model("user",userSchema);