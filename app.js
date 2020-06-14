var express = require("express");
var app = express();
var mongoose = require("mongoose");
var port = 7070

mongoose.connect("mongodb://localhost/todolist",(err)=>{
    if(err){
        console.log(`something went wrong connecting to db`)
    }
    else{
        console.log("database succesfully connectida")
    }
})

app.listen(process.env.PORT || port ,()=>{
    console.log(`listening on port ${port}`)
})

