//1

//const http = require('http');
//const hostname = 'localhost';
//const port = 2000

//const server = http.createServer(function (req, res){
//   res.writeHead(200, { 'Content-Type':'text/plain'});
//   res.end("Hello my server")
// });

//server.listen(port, function(){
//    console.log("Server at port", port, "is running")
// })

//2

//const http = require('http');
//const hostname = 'localhost';
//const port = 2000

//const server = http.createServer(function (req, res){
//    res.writeHead(200, {
//     'Content-Type':'text/html'});
//    res.end('<p>My server)))</p>');
// });

//server.listen(port, function(){
//    console.log("Server at port", port, "is running")
// });

//*
const http = require('http')
const fs = require('fs');

const server = http.createServer (function (req, res) {
    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type}':'text/html'})
            res.end('404')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(data)
        return res.end()
    })
})

//пуск
server.listen(port, function (){
    console.log("Server at port", port, "is running")
})

