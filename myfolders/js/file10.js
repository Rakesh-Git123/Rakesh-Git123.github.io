let cart={};
const products=[
    {id:1,name:"Product 1",price:65},
    {id:2,name:"Product 2",price:70},
    {id:3,name:"Product 3",price:75},
];

function showProducts(){
    console.log("****Products List****")
    products.map((d)=>{
        console.log(d.name+"-"+"$"+d.price);
    })
}
showProducts()

function addToCart(id){
    if(cart[id]){
        cart={...cart,[id]:cart[id]+1};
    }
    else{
        cart={...cart,[id]:1}
    }
}
addToCart(1)
addToCart(2)
addToCart(2)

const showCart=()=>{
    
    let str=""
    products.map((d)=>{
        if(cart[d.id]){
            str+=`${d.name} Price-${d.price} Quantity-${cart[d.id]} TotalPrice- ${cart[d.id]*d.price} \n`
        }
    })
    console.log("****My Cart***");
    console.log(str);
}
showCart()

const orderValue=()=>{
    let total=0;
    products.map((d)=>{
        if(cart[d.id]){
            total=total+d.price*cart[d.id];
        }
    })
    console.log("Total Price: "+total);
}
orderValue()