import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/"&& req.method ==="GET") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if(req.url === "/"&& req.method ==="POST"){
    //console.log("request:",req);
    let body=''
    req.on('data',(chunk)=>{
      body+=chunk
    })
    req.on("end",()=>{
      const product=JSON.parse(body);
      console.log("recieved product:",product);

      
    res.statusCode = 201;
    res.end("Post request");
    });

  }
  else if(req.url.startsWith("/products") === "/"&& req.method ==="PUT"){
    const productID  = req.url.split('/').pop();
    console.log("update product id:",productID);
    let body = "";
    req.on("data",(chunk)=>{
         body+=chunk;

    });

    res.statusCode = 200;
    res.end("Post request");
  }
  else if(req.url === "/"&& req.method ==="DELETE"){
    res.statusCode = 200;
    res.end("DELETE request");
  }
  else{
    res.statusCode=200;
    res.end("request not found");
  }
});
server.listen(6000, () => console.log("prg6 is running"));
