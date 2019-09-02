
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
    console.log("socket.io server is listening on port 3000");
})

const clients = [];
console.log('Currently there are ' + clients.length + ' connected');

io.on('connect', function (socket) {
    var newUserObject = {
        id: socket.id,
        nickname: null
    }
    addNewUsersToClientsArray(newUserObject)
    var allConnectedClients = Object.keys(io.sockets.connected);
    console.log("new user has connected, their Id is: " + socket.id + " #Currently there are " + clients.length + " users connected.")
    socket.on('nickname', function (nickname) {
        socket.nickname = nickname;
        newUserObject.nickname = nickname
        io.emit('userslistonConnection', clients)
    });
    socket.on('disconnect', function () {
        removeClientThatDisconnected(socket.id)
        console.log("new user has disconnected, their Id is: " + socket.id + " #Currently there are " + clients.length + " users connected.", 36)
        io.emit('userslistonDisconnection', clients)
    });








});




//TOOLS         

var removeClientThatDisconnected = function (id) {
    if(clients.length === 1){
        clients.pop();
    }else{
        clients.forEach(function (client) {
            console.log(client.id, id)
            if (client.id === id) {
                clients.splice(client, 1)
            }
        });
    }
}

var addNewUsersToClientsArray = function (newClient) {
    if (clients.length === 0) {
        clients.push(newClient)
    } else {
        var counter = 0;
        clients.forEach(function (client) {
            if (client.id === newClient.id) {
                counter++
            }
        })
    }if(counter === 0){
        clients.push(newClient)

    }
}




