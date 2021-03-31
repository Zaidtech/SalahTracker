const express = require('express');
const ejs = require('ejs');
const request = require('request');
const { parse } = require('path');
const { Server } = require('http');
const path = require('path');
var bodyParser = require("body-parser");
var spawn = require('child_process').spawn;

var app = express();

var timings;
var coordinates;
var lat;
var lon;

const views = path.join(__dirname,'views');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile('home.html',{root:'views'})
});

app.get('/time',function(req,res){

    lat = coordinates[0];
    lon = coordinates[1];
    console.log("Got latiitude as : ", lat);
    console.log("Got longitude as : ", lon);
    request(`http://api.aladhan.com/v1/timings/time?latitude=${lat}&longitude=${lon}&method=4`,function(error,responce,body){
    var parsedData = JSON.parse(body);
    timings = parsedData.data.timings;
    console.log(timings);    
    res.send(timings);
    }); 
});


app.post("/location",function(req,res){
    coordinates = req.body.location;
    console.log(coordinates);
    res.redirect("/time");
});

app.listen(3000,function(){
    console.log("Server started and listening");
});
