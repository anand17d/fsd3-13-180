import http from 'http'
const server=http.createServer((req,res)=>{
    // req method-> get post put delete patch
    console.log('method: ',req.method);
    console.log('url: ',req.url);
    //browser can send only get request to the server
    //post/put/patch/delete->can be checked by api tester
    //api tester:- postman,echo api, thunder client
    if(req.url==='/'){
        res.setHeader("content-type","text/html");
        res.end("<h1> hello server</h1>");
    }
    else if(req.url ==="/products"){
        const products=[
            {id: 1,name:"bottle"},
            {id:2,name:"laptop"},
        ];
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(products));
    }
    else{
        res.end();
    }
});
server.listen(5001,()=>console.log("prg5 is running"));