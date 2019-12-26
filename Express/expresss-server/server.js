//jshint esversion:6

const express = require('express');

const app = express();

const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact', function(req, res) {
    res.send('Contact me : noon@acoding.io');
});

app.get('/about', function(req, res){
    res.send("Hi I'm a software engineer.");
});

app.listen(3000, function(){
    console.log('Server started on port 3000...');
});

