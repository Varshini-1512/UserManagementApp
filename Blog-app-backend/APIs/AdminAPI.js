import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'

export const adminRoute=exp.Router()

// read all articles
// block 
adminRoute.put('/block/:userid',async(req,res)=>{
    const userid=req.params.userid
    // find user
    const user=await UserTypeModel.findById(userid)
    if(!user)
        return res.status(400).json({message:"user not found"})
    const blockedUser=await UserTypeModel.findByIdAndUpdate(userid,{$set:{isActive:false}})
    // send res
    res.status(200).json({message:"blocked the user",payload:blockedUser})
})
// unblock user roles
adminRoute.put('/unblock/:userid',async(req,res)=>{
    const userid=req.params.userid
    // find user
    const user=await UserTypeModel.findById(userid)
    if(!user)
        return res.status(400).json({message:"user not found"})
    const blockedUser=await UserTypeModel.findByIdAndUpdate(userid,{$set:{isActive:true}})
    // send res
    res.status(200).json({message:"Un-blocked the user",payload:blockedUser})
})