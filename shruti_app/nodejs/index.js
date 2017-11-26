var express = require("express")
var app = express();
var route = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoDB://localhost/")
route.get("/",function(req,res){
	
	res.json({name : "Mohan"})
});
/*app.get("/",function(req,res){
	
	
});*/
app.use("/api",route)
app.listen(9001,function(){
	console.log("Connection established")
});