const Sequelize=   require('sequelize');
const db=          require('../db/connection')


//instrutura do banco em Sequelize
const cadastroEmpresa = db.define('empresa_anunciante',{ 
    empresa: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    passwordempresa: {
        type: Sequelize.STRING,
    },
    cep: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    responsavel: {
        type: Sequelize.STRING,
    }


});

module.exports = cadastroEmpresa