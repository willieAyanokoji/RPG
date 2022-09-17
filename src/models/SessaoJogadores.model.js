const Sequelize = require('sequelize');
const db = require('../database/connect')




const SessaoJogadores = db.define('SessaoJogadores',{

    id_JS:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    id_Sessao:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'Sessao',
            key:'id_Sessao'
        }
    },
    id_Jogador:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: 'Jogadores',
            key: 'id_Jogador'
        }
    }
},{ freezeTableName: true,timestamps: false,} ); 
SessaoJogadores.sync();
module.exports = SessaoJogadores;
