//jshint esversion:6

const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

var bmi = 0;
app.use(bodyParser.urlencoded({extend:true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
    res.send('Your BMI is '+ bmi);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(path.join(__dirname + '/bmicalculator.html'));
});

app.post('/bmicalculator', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height * height);


    console.log(bmi)
});

app.listen(3000, function(){
    console.log('server started on port 3000...');
});
