const express = require("express");
const {  getAll, getById, createNewYarn, deleteYarnById, updateYarnById } = require("../controllers/yarn.controller");

const parser = require("body-parser");
const jsonParser = parser.json();
const yarnRouter = express.Router();

yarnRouter.get("/", getAll);

yarnRouter.get("/:id", getById);

yarnRouter.post("/", jsonParser, createNewYarn);

yarnRouter.delete("/:id", deleteYarnById );

yarnRouter.put("/", jsonParser, updateYarnById);

module.exports = yarnRouter;