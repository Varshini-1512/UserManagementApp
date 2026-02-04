import {Schema, model} from 'mongoose';

const productSchema=new Schema({
    productname:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price of the product is required"]
    },
    brand:{
        type:String,
        required:[true,"brand of the product is required"]
    }
},{
    strict:"throw",
    timestamps:true
})

export const ProductModel=model("product",productSchema)