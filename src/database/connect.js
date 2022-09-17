const Sequelize= require('sequelize');
const conexao= new Sequelize("rpg","root","root",{
    host:'localhost',
    dialect:'mysql'
});
conexao.authenticate()
.then(function(){
    console.log("Conectado");
}).catch(function(erro){
    console.log(erro);
});


module.exports = conexao;


/*
returadi a ideia de usar o mongoDB por enquanto
const mongoose = require('mongoose');

const connectToDatabase = async()=>{
    await mongoose.connect(
    `mongodb+srv://${process.env.USUARIO}:${process.env.SENHA}@cluster0.1decvct.mongodb.net/?retryWrites=true&w=majority`,
    (error)=>{
        if(error){
            return console.log(erro);
        }
         console.log('Conectado');   
        
    });
};
module.exports = connectToDatabase;*/



/*database criacao
create table jogadores(
	id_Jogador int primary key auto_increment,
	nome varchar(255)
);



create table sessao(
	id_Sessao int primary key auto_increment,
	nomeSessao varchar(255),
    mestre int,
    foreign key(mestre) references jogadores(id_Jogador)
);


create table jogadoresSessao(
	id_JS int primary key auto_increment,
    id_Sessao int,
    id_Jogador int,
    foreign key (id_Sessao) references jogadores(id_Jogador),
	foreign key(id_Sessao) references sessao(id_Sessao)
)



*/