import mongoose from "mongoose";
mongoose.connect("mongobd://localhost:27017/eshopdb")
.then(result=>{
    console.log("Database Connected..");
}).catch(err=>{
   console.log("Database Connection Failed...");
   console.log(err);
});
export default mongoose.connection;