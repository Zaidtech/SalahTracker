const express = require('express');
const ejs = require('ejs');
const request = require('request');
const { parse } = require('path');
const { Server } = require('http');
var spawn = require('child_process').spawn;


var app = express();

var timings;
var coordinates;
var lat;
var lon;

app.get("/",function(req,res){
    res.send("Welcome to the islamic salah tarcker");
});

app.get('/home',function(req,res){

    var process = spawn('python',["./getLocation.py"]);    
    process.stdout.on('data', function(data) {
        coordinates = data.toString().split('\n');
        lat = coordinates[0];
        lon = coordinates[1];
        res.send(`Your location is <br> Latitude: ${lat}  <br> Longitude : ${lon}`);
    });  
});

app.get('/time',function(req,res){
    // res.send(timings);
    request(`http://api.aladhan.com/v1/timings/time?latitude=${lat}&longitude=${lon}&method=4`,function(error,responce,body){
    var parsedData = JSON.parse(body);
    timings = parsedData.data.timings;
    // console.log(timings);    
    res.send(timings);

    }); 
});

app.listen(2000,function(){
    console.log("Server started and listening");
});











