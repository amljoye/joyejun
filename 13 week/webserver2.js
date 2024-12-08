const http=require('http');
const fs=require("fs");
const server=http.createServer()

server.on('request',(req,res)=>{
    const filename="10-4-1.html";
    fs.readFile(filename,function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end('<h1>Hello World!</h1>');
    });
});

server.listen(3000,()=>{
    console.log("server listens on port 3000 !");
});