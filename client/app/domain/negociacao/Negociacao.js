class Negociacao {

    //Javascript ainda não proporciona restrição de acesso em OO então utilizamos a convenção
    //do underline para deixar claro que as propriedades não devem ser acessadas diretamente.

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //javascript oferece o geter com essa sintaxe que possibilita acessarmos a propriedade "normalmente"
    //ex: n1.quantidade, porém se tentarmos alterá-la atribuindo um novo valor o comonado será ignorado,
    //n1.quantidade = 1000 não seria executado.

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}

