import mongoose from "mongoose";
const userShema=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:String,
    password:String,
    role:{type:String,default:'user'}

},
{timestamps:true}
);
const userModel=mongoose.model('User',userShema);
export default userModel;