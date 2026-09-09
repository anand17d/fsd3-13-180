import http from 'http'
const server=http.createServer((req,res)=>{
    // req method-> get post put delete patch
    console.log('method: ',req.method);
    console.log('url: ',req.url);
    //browser can send only get request to the server
    //post/put/patch/delete->can be checked by api tester
    //api tester:- postman,echo api, thunder client
    
})
server.listen(3000,()=>console.log("prg5 is running..."))