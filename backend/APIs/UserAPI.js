import exp from 'express'
import { UserModel } from '../models/UserModel.js'

// cretae min-express app
export const UserApp=exp.Router()
// user api router

// create user
UserApp.post('/users',async(req,res)=>{
    // get new user
    const newUser=req.body
    // create user document
    const newUserDocument=new UserModel(newUser)
    // save new user
    await newUserDocument.save()
    // send res
    res.status(201).json({message:"user created"})
})

// read all users
UserApp.get('/users',async(req,res)=>{
    // read users from db
    // let usersList=await UserModel.find({status:true})
    let usersList=await UserModel.find()
    // send response
    res.json({message:"users data",payload:usersList})
}) 

// read a user by id
UserApp.get('/users/:id',async(req,res)=>{
    //get the request
    let userId=req.params.id;
    //find the user by id
    let user=await UserModel.findById(userId);
    // check user
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send the res
    res.status(200).json({message:"user found",payload:user}) 
})

// delete a user by id
UserApp.delete("/users/:id",async(req,res)=>{
    // get user id from url
    let uid=req.params.id
    // find user and change status to false
    let user=await UserModel.findByIdAndUpdate(uid,{status:false},{new:true})
    // 
    if(!user)
    {
        return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json({ message: "user is deleted", payload:user});
})
// update user by id
// activate user
UserApp.patch('/users/:id',async(req,res)=>{
    // get the id
    let uid=req.params.id
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
    res.status(200).json({ message: "user is deleted", payload:user});
})