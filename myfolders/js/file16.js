// const f1=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(-2);
//         reject("Something went wrong");
//     });
// };

// const f2=(x)=>{
//     return new Promise((resolve,reject)=>{
//         if(x<0) reject("Negative number not allowed");
//             resolve(x+5)
//     });
// };

// f1()
//    .then((n)=> f2(n)
//                    .then((n)=>console.log(n)) 
//                    .catch((err)=>console.log(err)))
//    .catch((err)=>console.log(err))


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map((d,i)=>{
//         console.log(i+1+" "+d.title);
//     })
// }
// )
// .catch((err)=>console.log(err))

//Async await 