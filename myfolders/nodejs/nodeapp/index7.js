import express from "express";

const app = express();

app.use(express.json());

let products = [];

app.post("/", (req, res) => {
  const { id, name, price } = req.body;
  const found = products.find((product) => product.id === id);
  if (found) {
    res.send("Product already exist");
  } else {
    products = [...products, { id, name, price }];
    res.send("Product Created");
  }
});

app.delete("/:id",(req,res)=>{
    const id=Number(req.params.id)
    products=products.filter((product)=>product.id !== id);
    res.send("Product deleted successfully")
})

app.patch("/:id/:price",(req,res)=>{
    const id=Number(req.params.id);
    const price=Number(req.params.price);
    products=products.filter((product)=>product.id !== id);
    let product=products.find((d)=>d.id===id);
    if(!product) res.send("Product not found");
    else{
        products=[...products,{id,name:product.name,price}]
        res.send("Product updated successfully");
    }
    
})

app.get("/", (req, res) => {
  res.send(products);
});

app.listen(8080, () => {
  console.log("Server started");
});
