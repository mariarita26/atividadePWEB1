class PessoaFisica extends Pessoa {

    private readonly _cpf: string;

    constructor(nome: string, idade: string, dataNascimento: Date,  _cpf : string) {
        super(nome, idade, dataNascimento);
        this._cpf = _cpf;
    }

    get cpf() {
        return this._cpf;
    }

    toString(): string {
        return `Nome: ${this._nome} - Física,
        Idade: ${this.idade},
        Data de Nascimento: ${this.dataNascimento}`
    }
}