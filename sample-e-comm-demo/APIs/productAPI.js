import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()

productApp.get(('/products'),async(req,res)=>{
    const data=ProductModel.find();
    res.status(200).json({message:"all products",payload:data})
})

productApp.post(('/products'),async(req,res)=>{
    const newproduct=req.body
    const productDoc=await ProductModel(newproduct)
    productDoc.save()
    res.status(200).json({message:'product added',payload:productDoc})
})