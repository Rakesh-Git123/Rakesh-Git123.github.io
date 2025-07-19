import express from "express"
const app=express()
// app.use(express.static("public")); //Serve static files
app.use("images",express.static("images"))
app.get("/products",(req,res)=>{
    res.send("Product list")
})
app.listen(8080,()=>{
    console.log('Server started');
})