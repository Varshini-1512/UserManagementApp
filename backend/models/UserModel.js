// create user schema with validations
import { Schema,model } from "mongoose";
const userSchema=new Schema({
    name:{
        type:String,
        requied:[true,"enter name"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true]
    },
    DOB:{
        type:Date,
        required:[true,"date of birth is required"]
    },
    mobileNo:{
        type:Number,
        unique:true
    },
    status:{
        type:Boolean,
        default:true
    }
},
{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

// crteate user model for user schema
export const UserModel=model('user',userSchema)