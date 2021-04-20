const express = require("express");
const { getYarnById, deleteYarn, updateYarn, createYarn, getAllYarn } = require("../controllers/yarn.controller");

const parser = require("body-parser");
const jsonParser = parser.json();
const yarnRouter = express.Router();

yarnRouter.get("/", (req, res) => {
    getAllYarn()
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
})

yarnRouter.get("/:id", (req,res) => {
    let id = req.params.id;
    
 getYarnById(id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
    });

yarnRouter.post("/", jsonParser, (req,res) => {
    
    if(!req.body) {
        res.status(400).send();
    }
    
    createYarn(req.body)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
        
});

yarnRouter.delete("/:id", (req,res) => {
    let id = req.params.id;
    deleteYarn(id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
});

yarnRouter.put("/", jsonParser, (req,res) => {
    if(!req.body) {
        res.status(404).send();
    }
    
   updateYarn(req.body)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send(err.message));
});

module.exports = yarnRouter;