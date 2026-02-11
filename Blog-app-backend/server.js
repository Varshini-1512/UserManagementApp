import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute } from './APIs/UserAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
import cookieParser from 'cookie-parser'
import { commonRouter } from './APIs/CommonAPI.js'

config()

// create express application
const app=exp()
// add body parser middleware
app.use(exp.json())
app.use(cookieParser())

app.use('/user-api',userRoute)
app.use('/admin-api',adminRoute)
app.use('/author-api',authorRoute)
app.use('/common-api',commonRouter)

// connect to DB
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection is successful")
    // start http server
    app.listen(process.env.PORT,()=>console.log("server started"))
    }catch(err){
        console.log("error in Db connection",err)
    }
}
connectDB()

// dealing with invalid path 
app.use((req,res,next)=>{
    res.json({message:`${req.url} is invalid path`})
})

// error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occured",reason:err})
})