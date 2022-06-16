const express = require("express");
const app = express();
const mockUserData = [{name: "Joana"}, {name: "Claudio"}];


app.get("/users", function(req, res){
    res.json({
        sucess: true, message: "sucessfully got users", users: mockUserData});
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000, function(){
    console.log("server is running");
})