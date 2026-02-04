import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from './APIs/userAPI.js'
import {productApp} from './APIs/productAPI.js'


// create http server
const app=exp()
const PORT=3000
app.listen(PORT,{message:'server running at port ${PORT}'})
// connect to mongodb db
async function connectDB(){
    // db connection code
    try{
        await connect("mongodb://localhost:27017/ecommdb")
        console.log("connected to db successfully")
        
    }
    catch(err){
        console.log("error connecting to db",err)
    }
}
connectDB()
// use body parse middleware
// app.use(bodyParser.json())
app.use(exp.json())
// forward req to specific API
app.use('/user-api',userApp)
app.use('/product-api',productApp)
// error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occured",reason:err.message})
})