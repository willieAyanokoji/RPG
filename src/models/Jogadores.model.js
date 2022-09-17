const Sequelize = require('sequelize');
const db = require('../database/connect')




const Jogadores = db.define('jogadores',{
    id_Jogador:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{ freezeTableName: true,timestamps: false,} ); 
Jogadores.sync();
module.exports = Jogadores;

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