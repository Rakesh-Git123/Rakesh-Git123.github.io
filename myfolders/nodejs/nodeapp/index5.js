import express from 'express'

const app=express();

const logger=(req,res,next)=>{
    req.message="Logger"
    next()
}

app.use(logger) //Global middleware applicable to all routes

app.get("/",(req,res)=>{
    res.send(req.message)
})
app.listen(8080,()=>{
    console.log("Server started");
})