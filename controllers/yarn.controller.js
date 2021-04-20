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
})

exports.getAllYarn = function(){
    return new Promise(function(resolve,reject){
        connection.query("select * from yarn", (err,results,fields) => {
            if(err) {
                reject(new Error('cannot sql'))
            }
            resolve(results);
        })
    })
}

exports.getYarnById = function(id) {
    return new Promise(function(resolve,reject){
        connection.query("select * from yarn where id = " + id, (err,results,fields) => {
            if(err) {
                reject(new Error('cannot sql'))
            }
            resolve(results);
        })
    })   
}

exports.deleteYarn = function(id){
    return new Promise(function(resolve,reject){
        connection.query("delete from yarn where id = " + id, (err,results,fields) => {
            if(err){
                reject(new Error("yarn not found"))
            }
            resolve(results);
        })
    })
}

exports.updateYarn = function(body){
    let colourYarn = body.colour;
    let firmaYarn = body.firma;
    let articulYarn = body.articul;
    let id = body.id;

    return new Promise(function(resolve,reject){
        connection.query(`update yarn set articul = ${articulYarn}, firma = ${firmaYarn}, colour = ${colourYarn} where id = ${id}`, (err,results,fields) => {
            if(err){
                reject(new Error("can't update yarn"));
            }
            resolve(results);
        })
    })
}

exports.createYarn = function(body){

    let articulYarn = body.articul;
    let colourYarn = body.colour;
    let firmaYarn = body.firma;

    console.log(articulYarn,colourYarn, firmaYarn );

    return new Promise(function(resolve,reject){
        connection.query("INSERT INTO yarn VALUES (" + 4 + ", ${articulYarn}, ${colourYarn}, ${firmaYarn})" , (err,results,fields) => {
            if(err){
                reject(err)
            }
            resolve(results);
        })
    })
}