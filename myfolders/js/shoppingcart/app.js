let cart={};
const products=[
    {id:1,name:"Product 1",price:65},
    {id:2,name:"Product 2",price:70},
    {id:3,name:"Product 3",price:75},
];

function addToCart(id){
    if(cart[id]){
        cart={...cart,[id]:cart[id]+1};
    }
    else{
        cart={...cart,[id]:1}
    }
    renderCart()
}

const increment=(id)=>{
    cart={...cart,[id]:cart[id]+1}
    renderCart()
}

const decrement=(id)=>{
    if(cart[id]==1){
        delete cart[id]
    }
    else
    cart={...cart,[id]:cart[id]-1}
    renderCart()
}
let productsDiv=document.getElementById("products")
products.map((d)=>{
    let div=document.createElement("div");
    let element1=document.createElement("span");
    let element2=document.createElement("span");
    let button=document.createElement("button")
    button.textContent="Add to Cart"
    button.onclick = () => addToCart(d.id);
    element1.textContent="Name: "+d.name+" "
    element2.textContent="Price: "+d.price+" "
    div.appendChild(element1)
    div.appendChild(element2)
    div.appendChild(button)
    productsDiv.appendChild(div)
})

let cartDiv=document.getElementById("cart")
const renderCart=()=>{
    let totalPrice=0;
    cartDiv.innerHTML=""
        products.map((d)=>{
            if(cart[d.id]){
                let p=document.createElement("p")
                let p2=document.createElement("p")
                let inc=document.createElement("button")
                inc.textContent="+"
                inc.onclick=()=>increment(d.id)
                let dec=document.createElement("button")
                dec.textContent="-"
                dec.onclick=()=>decrement(d.id)
                p.textContent=`${d.name} Price-${d.price} Quantity-${cart[d.id]} TotalPrice- ${cart[d.id]*d.price}`
                p2.appendChild(inc)
                p2.appendChild(dec)
                p.appendChild(p2)
                cartDiv.appendChild(p)
                totalPrice=totalPrice+cart[d.id]*d.price
            }
        })
        document.getElementById("totalPrice").textContent="Total Price "+totalPrice
}


