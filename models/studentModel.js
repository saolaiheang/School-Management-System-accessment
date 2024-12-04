import mongoose from "mongoose";
const studentSchemaModel= new mongoose.Schema({
IDCard:{type:Number},
username:{type:String},
email:{type:String},
phone:{type:String},
classId:{type:mongoose.Schema.Types.ObjectId,ref:'class'}
},
{
    timestamps:true
});
const studentShema=mongoose.model('Student',studentSchemaModel);
export default studentShema;