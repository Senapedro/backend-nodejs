class Pessoa {
    constructor (nome, idade, altura, genero) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }

    nomeIdade = function() {
        return this.nome + " " + this.idade;
    }
}

class Professor extends Pessoa{
    constructor (nome, idade, altura, genero, salario, turmas) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = salario,
        this.turmas = turmas
    }

    infos = function() {
        return this.nome + " " + this.turmas + "  " + this.salario;
    }
}

class Aluno extends Pessoa {
    constructor (nome, idade, altura, genero, nota, turma, RM) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = nota,
        this.turma = turma,
        this.RM = RM
    }

    infos = function() {
        return this.nome + " " + "  " + this.idade + "  " + this.RM;
    }
}

const prof = new Professor("Pedro", 24, 1.85, "M", 10000, [16,15]);
const estudante = new Aluno("Pedro", 15, 1.75, "M", 9.0, 16, 42567);

console.log(prof);
console.log(estudante);

console.log(prof.infos());
console.log(estudante.infos());