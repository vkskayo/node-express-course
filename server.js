const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const mockUserData = [{name: "Joana"}, {name: "Claudio"}];


app.get("/users", function(req, res){
    res.json({
        sucess: true, message: "sucessfully got users", users: mockUserData});
})

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "chibana";
    const mockPassword = "1234";

    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true, message: "username and password match!", token : "encrypted token goes here"
        })
    } else{
        res.json({
            sucess : false, message : "password and username do not match"
        })
    }


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