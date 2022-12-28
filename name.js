const http=require('http');

const server=http.createServer(function(req,res){
 if(req.url==='/home'){
    res.end('<html><body><h1>Welcome home</h1></body></html>');
 }
 if(req.url==='/about'){
    res.end('<html><body><h1>Welcome About us</h1></body></html>');
 }
 if(req.url==='/node'){
    res.end('<html><body><h1>Welcome Node js Project</h1></body></html>');
 }
 
});

server.listen(4000,()=>{
    console.log("server start");
})