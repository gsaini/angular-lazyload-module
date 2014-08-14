var express = require('express'),
    app = express(),
    fs = require("fs");

var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        socket.emit('show message', msg);
    });
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});



//app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/saveScreen', function(req, res) {
    var fileName = __dirname + '/uploads/' + req.body.fileName + '.jpg',
        base64Data = req.body.imgBase64.replace(/^data:image\/png;base64,/, "");

    fs.writeFile(fileName, new Buffer(base64Data, "base64"), function(err) {
        err ? res.send('Oops! something bad happened. :(') : res.send("Woow! screen saved successfully. :)");
    });
});

http.listen(3000);
console.info('Node server is running on port : 3000');