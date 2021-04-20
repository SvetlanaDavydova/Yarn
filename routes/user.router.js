const express = require("express");
const parser = require("body-parser");
const {  registration, login, addUserInfo } = require("../controllers/user.controller");
const { json } = require("body-parser");
const jsonParser = parser.json();
// const jsonParser2 = parser.urlencoded();

const userRouter = express.Router();

userRouter.post("/registration", jsonParser, registration);
userRouter.post("/login", jsonParser, login);
userRouter.post("/info", jsonParser, addUserInfo);

module.exports = userRouter;