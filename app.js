const express =             require('express');   /*chamando express*/  
const app =                 express();  /*iniciando vareavel que escuta express */
const Sequelize =           require('sequelize');  /*adicionando Sequeliza, gerenciador de banco, estrutura e padroes*/
const db =                  require('./db/connection'); /* caminho para aquivo connection.js onde esta os parametros do banco*/
const bodyParser=           require('body-parser'); // estrutura para utilização o bodyparser banco de dados 
const cadastroPessoa=       require('./models/cadastroPessoa');
const CadastroEmpresa=      require('./models/cadastroEmpresa');
    /*fase de view*/
const exphbs =              require('express-handlebars'); //manipular as view e renderizar
const path=                 require('path'); // auxiliar em localizar os diretorios


const PORT = 3000; /*PORTA de funcionamento*/

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`); /*função para inicialização de porta*/
});


//---------------banco de dados conexão---------------------------
db      
    .authenticate()
    .then(()=>{
        console.log("Conectado ao banco de dados");  /*Conexão ao banco de dados*/
    })
    .catch(err =>{
        console.log("Erro ao conectar",err);
    });


// apontando que irei utilizar body parser, estrutura des POST para banco
app.use(bodyParser.urlencoded({extended: false}));

// Cadastro routes (express) poder utilizar os posts , gets e etc
app.use('/cadastro', require('./routes/cadastro'));

// static folder css
app.use(express.static(path.join(__dirname, 'public')));

// view-------------------------------

app.set('vews',path.join(__dirname, 'views'));//diretorio de vews render path do node pra auxiliar e encontrar diretorios
app.engine('handlebars',exphbs({defaultLayout:'main'})); //dizendo qual pagina padrão para renderizar.
app.set('view engine','handlebars'); //dizendo qual framework ira renderizar as views

 
/*
app.get('/', (req , res) => {
    res.send("Funcionando");        /*função para confirmação de funcionamento antes de aplicar 
                                        res.render para apontamento de rota da view 
});
*/

app.get('/', (req , res) => {
    res.render('index');                 //determinando a rota vew pagina principal
});

app.get('/login', (req , res) => {
    res.render('login');                 //determinando a rota vew pagina login
});


app.get('/cadastrar', (req , res) => {
    res.render('cadastrar');                 //determinando a rota vew pagina principal
});