const express = require('express');
const dotenv= require('dotenv');
const app = express();
const db= require('./database/connect');
dotenv.config();
const path = require('path');
const router = express.Router();
const User= require('./models/User.model');
const Sessao= require('./models/Sessao.model');
const SessaoJogadores= require('./models/SessaoJogadores.model');
const http = require('http-msgs');
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

router.get('/',function(req,res){
    res.render('index');
});
router.get('/index',function(req,res){
    res.render('index');
});
router.get('/registro',function(req,res){
   res.render('registro');
});

app.use('/',router);
app.post("/Cadastrar",async(req,res)=>{
    await User.create(req.body)
    .then(()=>{
        res.send('/index');       
    }).catch((err)=>{
       http.send500(req,res,"Dados invalidos");

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