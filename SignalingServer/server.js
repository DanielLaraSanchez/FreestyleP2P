const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const ioSocket = require('socket.io');
const io = ioSocket(server)



app.use(express.static('client'));

app.get('/chat', function(req, res){
    ioSocket(server).emit("chat", req.params.params)

})
    


io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat', function(msg){
        console.log('message: ' + msg);
      });

    socket.on('disconnect', function(){
        console.log('a user disconnected')
    });
});



server.listen(3000, function(){
    console.log("connected to server motherfucker! listening to port 3000..... ")
});