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

exports.getAll = (req, res) => {
    getAllYarn()
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
}

exports.getById = (req,res) => {
    let id = req.params.id;
    getYarnById(id)
            .then((results) => res.send(results))
            .catch((err) => res.status(500).send(err.message));
}
exports.deleteYarnById = (req,res) => {
    let id = req.params.id;
        deleteYarn(id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
}

exports.updateYarnById = (req,res) => {
    if(!req.body) {
        res.status(404).send();
    }    
    updateYarn(req.body)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
}

exports.createNewYarn = (req,res) => {
    if(!req.body) {
        res.status(400).send();
    }    
    createYarn(req.body)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
        
}