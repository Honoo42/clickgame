var io = require('socket.io')
window.onload = function() {
 
    var welcome = document.getElementById("welcome");
    var allUsers = document.getElementById("users");
    var progress = document.getElementById("progress");
    var results = document.getElementById("results");
 
    var socket = io.connect('http://localhost:3250');
    socket.on('welcome', function (data) {
        console.log(data);
        welcome.innerHTML = "Welcome to the game <strong>" + data.name + "</strong>";
    });
    socket.on('users', function (data) {
        allUsers.innerHTML = "<strong>Users:</strong>" + data.users;
    });
    socket.on('update', function (data) {
        progress.innerHTML = data.currentWidth;
        progress.style.width = parseInt(data.currentWidth) + "px";
    });
    socket.on('win', function (data) {
        results.innerHTML = data.message;
    });
 
    progress.onclick = function() {
        socket.emit("click");
    }
 
}