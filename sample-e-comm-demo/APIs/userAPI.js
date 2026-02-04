import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import { ProductModel} from '../models/ProductModel.js'
import {hash} from 'bcryptjs'
export const userApp=exp.Router()

userApp.post(('/users'),async(req,res)=>{
    const newuser=req.body
    await new UserModel(newuser).validate()
    const hashedpassword=await hash(newuser.password,12)
    newuser.password=hashedpassword
    const userDoc=await UserModel(newuser)
    await userDoc.save({validateBeforSave:false})
    res.status(200).json({message:"user added",payload:userDoc})
})

/*userApp.put(('/user-cart/user-id/:uid/product-id/:pid'),async(req,res)=>{
    // read uid and pid from url params
    let {uid,pid}=req.params;   //{uid:"",pid:""}
    // check user
    let user=await UserModel.findById(uid)
    if(!user)
        return res.status(401).json({message:"user not found"})
    // check product
    let product=await ProductModel.findById(pid)
    if(!product)
        return res.status(401).json({message:"product not found"})

    // perform update
    let modifiedUser=await UserModel.findByIdAndUpdate(uid,{$push:{cart:{product:pid}}},{new:true})
    .populate("cart.product","productname")
    res.status(200).json({message:"product added to cart",payload:modifiedUser})
})*/

userApp.put(('/user-cart/user-id/:uid/product-id/:pid'),async(req,res)=>{
    // read uid and pid from url params
    let {uid,pid}=req.params;   //{uid:"",pid:""}
    // check user
    let user=await UserModel.findById(uid)
    if(!user)
        return res.status(401).json({message:"user not found"})
    // check product
    let product=await ProductModel.findById(pid)
    if(!product)
        return res.status(401).json({message:"product not found"})
    // check whether item is available in cart or not
    let cartproductindex=user.cart.findIndex(item=>String(item.product)===pid)
    if(cartproductindex===-1){
    let modifiedUser=await UserModel.findByIdAndUpdate(uid,{$push:{cart:{product:pid,quantity:1}}},{new:true})
    res.status(200).json({message:"product created",payload:modifiedUser})
    }
    else{
        user.cart[cartproductindex].quantity++
        await user.save()
        // let modifiedUser=await UserModel.findById(uid)
        res.status(200).json({message:"qunatity increased"})
    }
})


// read user by id
userApp.get(('/users/:id'),async(req,res)=>{
    const userid=req.params.id
    const user=await UserModel.findById(userid).populate("cart.product","productname price")
    if(!user)
        return res.status(401).json({message:"user not found"})
    res.status(201).json({message:"user details",payload:user})
})