const Sequelize = require('sequelize');
const db = require('../database/connect')




const Sessao = db.define('Sessao',{
    id_Sessao:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nomeSessao:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    mestre:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: 'Jogadores',
            key: 'id_Jogador'
        }
    }
},{ freezeTableName: true,timestamps: false,} ); 
Sessao.sync();
module.exports = Sessao;

