const express = require('express');
const dotenv= require('dotenv');
const app = express();
const db= require('./database/connect');
dotenv.config();
const path = require('path');
const router = express.Router();
const Jogadores= require('./models/Jogadores.model');
const Sessao= require('./models/Sessao.model');
const SessaoJogadores= require('./models/SessaoJogadores.model');
app.use(express.json());
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/',router);
app.post("/Cadastrar",async(req,res)=>{
    await Jogadores.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Jogador cadastrado"
        })
    }).catch((err)=>{
        return res.json({
            erro:true,
            mensagem:"Erro de criacao"
        })
    })
    
});
app.listen(process.env.port || 3000);








/*const http = require("http");

const hostname = '127.0.0.1';

const port = 3000;

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end("./");
});
server.listen(port,hostname,()=>{
    console.log("Abriu o servidor");
});*/