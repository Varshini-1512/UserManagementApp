import exp from 'express'
import {register,authenticate} from '../services/authService.js'
import {ArticleModel} from '../models/ArticleModel.js'


export const userRoute=exp.Router()

// Register user
userRoute.post('/users',async(req,res)=>{
    // get user obj from req
    let userObj=req.body
    // call register
    const newUserObj=await register({...userObj,role:"USER"})
    // send res
    res.status(201).json({message:"user created",payload:newUserObj})

})

// read all articles
userRoute.get('/articles',async(req,res)=>{
    // get author id
    let authorid=req.params.authorid
    const articleObj=await ArticleModel.find()
    res.status(200).json({message:"articles",payload:articleObj})
})

// add comments to article
userRoute.put('/articles/:articleId',async(req,res)=>{
    // get the articleId from url path
    let {articleId}=req.params;
    let {author,comment}=req.body;
    
    let articleOfDB=await ArticleModel.findById(articleId);
    if(!articleOfDB)
    {
          return res.status(401).json({message:"article not found"});
    }
     articleOfDB.comments.push({author,comment})
    let updatedArticle=await articleOfDB.save();
    res.status(200).json({message:"comment added succesfully",payload:updatedArticle})
})