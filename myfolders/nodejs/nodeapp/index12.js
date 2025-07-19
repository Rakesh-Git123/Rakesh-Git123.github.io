import express from "express";
import mongoose from "mongoose";
const app=express();
app.use(express.json())

const userSchema=new mongoose.Schema({
    userName:String
})

const User=mongoose.model("user",userSchema);

const connectToMongo=async()=>{
    await mongoose.connect('mongodb://localhost:27017')
    .then(()=>{
        console.log("Mongodb connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

app.post("/", async (req, res) => {
    try {
        const { userName } = req.body;
        const user = await User.create({ userName });
        res.status(201).json({ message: "User created", user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

connectToMongo();

app.listen(8080,()=>{
    console.log("Server startred");
})