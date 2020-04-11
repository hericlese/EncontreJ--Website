const Sequelize =   require('sequelize');
const db =          require('../db/connection');


//instrutura do banco em Sequelize
const cadastroPessoa = db.define('usuario_anunciantes',{
    name: {
        type: Sequelize.STRING,  
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    sexo: {
        type: Sequelize.INTEGER,
    },
    cep: {
         type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
    telefone: {
        type: Sequelize.INTEGER,
    }
});

module.exports = cadastroPessoa
