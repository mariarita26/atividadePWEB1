class Pessoa {

    protected _nome: string;
    private _idade: string;
    private _dataNascimento: Date;

    constructor(_nome: string, _idade: string, _dataNascimento: Date) {
        this._nome = _nome;
        this._idade = _idade;
        this._dataNascimento = _dataNascimento;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get idade() {
       return this._idade;
    }

    set idade(novaIdade: string) {
        this._idade = novaIdade;
    }

    get dataNascimento() : Date{
        return this._dataNascimento;
    }

    set dataNascimento(novaDataNascimento) {
        this._dataNascimento = novaDataNascimento;
    }

}