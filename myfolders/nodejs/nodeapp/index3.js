import http from "http"

let server=http.createServer((req,res)=>{
    res.end("Request recieved....")
})

server.listen(8081,()=>{
    console.log("Server started");
})