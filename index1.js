var express=require('express')
var app=express();
let port=process.env.PORT || 8080;
app.get("/",function(err,res){
res.send("Helllo");
}):


app.listen(port,function(){
console.log("connection made");
});
