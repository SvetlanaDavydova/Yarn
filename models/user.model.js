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

exports.createUser = function(login,password){
    return new Promise(function(resolve,reject){              
        connection.query("INSERT INTO `users` (`login`, `password`) VALUES (?, ?)" ,[login, password], (err,results,fields) => {
            if(err){
                reject(err)
            }
            resolve(results[0]);
        })
    })
};

exports.getUserByLogin = function(login){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM `users` WHERE `login` = ?", [login],(err,results,fields) => {
            if(err) {
                reject(new Error('cannot sql'))
            }
            resolve(results[0]);
        })
    }); 
};

exports.addInformation = function(email,name,surname,userId){
    return new Promise (function(resolve,reject){
        connection.query("INSERT INTO users_info (email,name,surname,user_id) VALUES (?,?,?,?)", [email,name,surname,userId], (err,results,fields)=>{
            if (err){
                reject (err);
            } 
            else {
                resolve(results[0]);
            }
        })
    })
}