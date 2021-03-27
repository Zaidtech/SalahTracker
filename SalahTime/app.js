const express = require('express');
const ejs = require('ejs');
const request = require('request');
var fs = require('fs');
const { parse } = require('path');
const { Server } = require('http');

var coordinates = fs.readFileSync('coordinates.txt', 'utf8').split('\n');
// console.log(coordinates);
var lat = coordinates[0];
var lon = coordinates[1];
var timestamp  = Date.now()  
console.log(lat);


request(`http://api.aladhan.com/v1/timings/time?latitude=${lat}&longitude=${lon}&method=4`,function(error,responce,body){
   var parsedData = JSON.parse(body);
    timings = parsedData.data.timings;
});


var app = express();

app.get('/',function(req,res){
    res.send(timings);
})


app.listen(2000,function(){
    console.log("Server started and listening");
})











