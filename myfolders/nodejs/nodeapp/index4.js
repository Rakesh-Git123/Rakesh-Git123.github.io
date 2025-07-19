import express from 'express'

const app=express();

// app.get("/",(req,res)=>{
//     res.send("This is home page")
// })

// app.get("/products",(req,res)=>{
//     res.send("This is the product list")
// })

// app.get("/:name",(req,res)=>{
//     res.send(`Hello ${req.params.name}`)
// })
// app.get("/:name/:age",(req,res)=>{
//     res.send(`Name: ${req.params.name} Age: ${req.params.age}`)
// })
// app.get("/name/:name/age/:age",(req,res)=>{
//     res.send(`Name: ${req.params.name} Age: ${req.params.age}`)
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization)
// })

//localhost:8080/?name="Rakesh"
// app.get("/",(req,res)=>{
//     res.send(req.query.name)
// })

app.listen(8080,()=>{
    console.log("Server Started")
})
