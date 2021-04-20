const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    database:"yarn",
    password:"root"
});
connection.connect(function(err){
    if(err){
        return console.error("ошибка");
    } 
    console.log("подключено к базе данных");
});
const { createUser, getUserByLogin, addInformation } = require("../models/user.model");


exports.registration = (req,res) => {
    if(!req.body) {
        res.status(400).send();
    }
     createUser(req.body.login, req.body.password)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));        
}

exports.login = (req,res) => {    
    if(!req.body) {
        res.status(400).send();
    }
    getUserByLogin(req.body.login)
        .then((results) => {
            if(results.password == req.body.password) {
                res.cookie("userId", results.id);
                res.status(200).send("logged in");
            } else{
                res.status(400).send("unauthorized");
            }
        })
        .catch((err) => res.status(500).send(err.message));        
}; 

exports.addUserInfo = function (req,res){  
    getUserByLogin(req.body.login)
        .then((results) => {
            addInformation(req.body.email,req.body.name, req.body.surname,results.id)
                .then((results)=>res.status(200).send(results))
                .catch((err) => res.status(500).send(err) );
        })
        .catch((err) => res.status(500).send(err) )
}