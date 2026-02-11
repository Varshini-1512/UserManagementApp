import { Schema,model } from 'mongoose'

const userSchema=new Schema({
    firstname:{
        type:String,
        required:[true,"enter the first name"]
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exist"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    profileImageUrl:{
        type:String
    },
    role:{
        type:String,
        enum:['AUTHOR','USER','ADMIN'],
        required:[true,"{Value} is invalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

export const UserTypeModel=model('user',userSchema)