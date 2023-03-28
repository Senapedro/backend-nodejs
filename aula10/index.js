const json = '{"nome": "Pedro","idade": 25,"professor": true}'
const obj = JSON.parse(json);

console.log(obj);

const pessoa = {
    nome: "Pedro",
    sobrenome: "Sena",
    idade: 24,
    altura: 1.85,
    aluno: true,

    envelhecer: function(){
        this.idade += 1;
    }
}

//console.log(pessoa);

const json2 = JSON.stringify(pessoa);
console.log(json2);