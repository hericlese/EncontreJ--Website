const express =          require('express');
const router =           express.Router();
const CadastroPessoa =         require('../models/cadastroPessoa');
const CadastroEmpresa =        require('../models/cadastroEmpresa');






router.get('/teste', (req, res)=> {
    res.send('deu certo!');
}); // rota de teste router


router.post('/cadastrarpessoa', (req, res)=>{

    let{name, email, password, sexo, cep, idade, telefone} = req.body; // intrutura do post (body parser)
   //instrutura de post que insere dados ao banco
    CadastroPessoa.create({
        name,
        sexo,                 
        email,
        password,
        cep,
        idade,
        telefone
   })
   .then(()=> res.redirect('/')) //caso faço redirecione a esta pagina /
   .catch(err => console.log(err));
});


router.post('/cadastrarempresa',(req,res)=>{
    let{empresa,email,passwordempresa,cep,description,responsavel} = req.body;

    CadastroEmpresa.create({
        empresa, 
        email,
        passwordempresa,                   // instrutura de Insert bodyParser 
        cep,
        description,
        responsavel
     })
     .then(()=> res.redirect('/')) //se fizer redirecione a pagina /
     .catch(err => console.log(err));
});

module.exports = router
