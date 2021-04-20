const express = require("express");
const app = express();
const yarnRouter = require("./routes/yarn.router.js");
const userRouter = require("./routes/user.router.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/user/login", (req, res) => {
    res.sendFile(__dirname + "/public/pages/signin/signin.html");
})

app.get("/user/registration", (req, res) => {
    res.sendFile(__dirname + "/public/pages/signup/signup.html");
})

app.get("/user/profile",(req,res) =>{
    if(req.cookies.userId){

        res.sendFile(__dirname + "/public/pages/profile/profile.html");
    } else { 
        res.sendStatus(401);
    }
});

app.get("/user/profile/bio",(req,res) =>{
    res.sendFile(__dirname + "/public/pages/profile/bio.html");
})

app.use("/api/yarn", yarnRouter);
app.use("/api/user", userRouter);

app.listen(3000,function(){
    console.log("Сервер ожидает подключения");
})