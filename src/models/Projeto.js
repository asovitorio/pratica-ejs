const projetos = [{
        nome: "PetShop em Node",
        descricao: "Petshop feito em node",
        tecnologia: "Node"
    },
    {
        nome: "Site Landseeker",
        descricao: "Site feito em HTML",
        tecnologia: "HTMl & CSS"
    },
    {
        nome: "PHP",
        descricao: "Site Dinamico em PHP",
        tecnologia: "PHP - HTMl, CSS e Javascript"
    }
];

const pegarProjetos = () => {
    return projetos;
}

module.exports = {
    pegarProjetos
}