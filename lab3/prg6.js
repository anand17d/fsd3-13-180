import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/"&& req.method ==="GET") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if(req.url === "/"&& req.method ==="POST"){
    res.statusCode = 200;
    res.end("Post request");
  }
  else if(req.url === "/"&& req.method ==="PUT"){
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