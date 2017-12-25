#!/usr/bin/env node
var express  = require('express');
var app      = express();                               // create our app w/ express
var http = require('http').Server(app);
//	var io = require('socket.io')(http);
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var exchangeName = "direct";
var routingKey = "debug1";


// application -------------------------------------------------------------
app.get('*', function(req, res) {
        res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        
        
        });



// listen (start app with node server.js) ======================================
server.listen(process.env.PORT || 8081);
console.log("App listening on port 8081");

