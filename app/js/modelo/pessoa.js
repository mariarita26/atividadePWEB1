class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(_nome, _idade, _dataNascimento) {
        this._nome = _nome;
        this._idade = _idade;
        this._dataNascimento = _dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(novaDataNascimento) {
        this._dataNascimento = novaDataNascimento;
    }
}
