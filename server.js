const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://ThaisFelicio:fjmaXzX3zqpUjEze@dadoscurriculo.otgkmeg.mongodb.net/Users", {useNewUrlParser: true}, {useUnifiedTopology: true})

//create a data schema
const usersSchema = {
    name: String,
    password: String
}

const User = mongoose.model("User", usersSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newUser = new User({
        name: req.body.name,
        password: req.body.password
    });
    newUser.save();
})
// pela porta 3000 por algum motivo que desconheço, não estava enviando os dados,
// então tentei pela porta 3001 e deu certo
app.listen(3001, function(){
    console.log("server is running on 3001");
})
//só funciona se usar o terminal e digitar node e o nome do arquivo 
//a ser executado com a porta, como node server.js por exemplo, é como se fosse um servidor
//rodando e só funciona enquanto ele estiver ligado

