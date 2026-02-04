import {Schema,model} from 'mongoose'

const cartSchema=new Schema({
    product:{
    type:Schema.Types.ObjectId,
    ref:'product'  //name of the product model
    },
    quantity:{
        type:Number,
        default:1
    }
})

/*const cartSchema=new Schema({
    product:{
    type:Schema.Types.ObjectId,
    ref:'product'  //name of the product model
    }
})*/

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,'email required '],
        unique:true     //add to index
    },
    password:{
        type:String,
        required:[true,"password required"],
    },
    cart:{
        type:[cartSchema]
    }
},{
    strict:"throw"
})
export const UserModel=model("user",userSchema)