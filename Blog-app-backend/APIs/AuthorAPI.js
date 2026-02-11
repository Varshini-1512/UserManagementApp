import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'
import {ArticleModel} from '../models/ArticleModel.js'
import {register,authenticate} from '../services/authService.js'
import { checkAuthor } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/verifyToken.js'


export const authorRoute=exp.Router()

// Register author(public)
authorRoute.post('/users',async(req,res)=>{
    // get user obj from req
    let userObj=req.body
    // call register
    const newUserObj=await register({...userObj,role:"AUTHOR"})
    // send res
    res.status(201).json({message:"author created",payload:newUserObj})
})

// cteate article(protected)
authorRoute.post('/articles',verifyToken,checkAuthor,async(req,res)=>{
    // get article from req
    let articleObj=req.body
    // check for the author exist or not
    /*const author=await UserTypeModel.findById(articleObj.author)
    if(!author || author.role!=="AUTHOR"){
        res.status(401).json({message:"Invalid author"})
    }*/
    // create article documnet
    let newArticleDoc=new ArticleModel(articleObj)
    // save
    let createdArticleDoc=await newArticleDoc.save()
    // send res
    res.status(201).json({messgae:"article created",payload:createdArticleDoc})
})

// read article of author(protected)
authorRoute.get("/article/:authorid",verifyToken,checkAuthor,async(req,res)=>{
    // get author id
    let authorid=req.params.authorid
    // read article by this author
    const articleObj=await ArticleModel.find({author:authorid,isArticleActive:true}).populate("author")
    // send res
    res.status(201).json({message:"articles",payload:articleObj})
})

// edit article(protected)
authorRoute.put('/articles',verifyToken,checkAuthor,async(req,res)=>{
    // get modified article from req
    let {author,articleid,title,category,content}=req.body;
    // find article
    let article=await ArticleModel.findOne({_id:articleid,author:author});
    if(!article)
        return res.status(401).json({message:"article not found"})
    // check if the article is published by the aythor or not

    // update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleid,{$set:{title,category,content}},{new:true})
    // send res
    res.status(201).json({message:"updated the article",payload:updatedArticle})
})

// delete article(protected)
authorRoute.delete('/article/:articleid/author/:authorid',verifyToken,checkAuthor,async(req,res)=>{
    // read article id
    const {articleid,authorid}=req.params
    // find article 
    let article=await ArticleModel.findOne({_id:articleid,author:authorid});
    if(!article)
        return res.status(401).json({message:"article not found"})
    // update the article
    let deletedArticle=await ArticleModel.findByIdAndDelete(articleid)
    // send res
    res.status(201).json({message:"article deleted",payload:deletedArticle})
})