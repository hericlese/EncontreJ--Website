const express =     require('express');   /*chamando express*/  
const app =         express();  /*iniciando vareavel que escuta express */
const Sequelize =   require('sequelize');  /*adicionando Sequeliza, gerenciador de banco, estrutura e padroes*/
const db =           require('./db/connection'); /* caminho para aquivo connection.js onde esta os parametros do banco*/




const PORT = 3000; /*PORTA de funcionamento*/

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`); /*função para inicialização de porta*/
});

app.get('/', (req , res) => {
    res.send("Funcionando");        /*função para confirmação de funcionamento*/
});



db      
    .authenticate()
    .then(()=>{
        console.log("Conectado ao banco de dados");  /*Conexão ao banco de dados*/
    })
    .catch(err =>{
        console.log("Erro ao conectar",err);
    });




