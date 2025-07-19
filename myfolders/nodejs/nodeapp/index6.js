import express from "express"

const app=express()

app.use(express.json())

app.post("/",(req,res)=>{
    res.send(req.body); //Get the data from the body
})
app.listen(8080,()=>{
    console.log("Server started");
})