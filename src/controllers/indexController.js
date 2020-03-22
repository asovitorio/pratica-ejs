const Projeto = require('../models/Projeto');

const indexController = {
    inicio: (req, res)=>{
        let listaDeProjetos = Projeto.pegarProjetos();
      res.render('index',{projetos:listaDeProjetos});
    }

    
}
module.exports = indexController