var express=require('express')
var app=express();
app.get("/",function(err,res){
res.send("Helllo");
}):


app.listen(8080,function(){
console.log("connection made");
});
