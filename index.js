var express=require('express');
var app=express();
var bodyParser = require('body-parser');

var inforouter=require('./server/routers/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/index',express.static('public'))

app.use('/war',inforouter);

app.listen(4400,function(){
    console.log("server is running check it....");
})