const findAllempresas = (req,res) => {
    res.send("Todas as empresas listadas");
}

const createEmpresa = (req,res) => {
    res.send("Empresa criada com sucesso");
}

module.exports = {
    findAllempresas,
    createEmpresa
}