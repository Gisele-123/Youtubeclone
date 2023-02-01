let http=require('http');
let server=http.createServer(function(res,req){
if(req.url=='/'){
      res.writeHead(200,{'Content-type':'text/html'})
      res.write('<html><body><p>This is my homepage.</p></body></html>')
      res.end();
}else if(req.url=='/student'){
    response.writeHead(200,{'COntent-type':'text/html'})
    response.write('<html><body><p>This is student page.</p></body></html>')
    res.end();
}else if(req.url=='/teacher'){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<html><body><p>This is teacher\'s platform.</p></body></html>')
    res.end()
}
else if (req.url == "/admin") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is admin Page.</p></body></html>');
    res.end();
}
else res.end('Invalid Request!')
});
server.listen(8050)
console.log('Web server at port 8050 is running..');