class Negociacao {

    //Javascript ainda não proporciona restrição de acesso em OO então utilizamos a convenção
    //do underline para deixar claro que as propriedades não devem ser acessadas diretamente.

    constructor(data, quantidade, valor) {
        //a data foi alterada para esse formato como programação defensiva, para evitar que a
        //data possa ser alterada. ref. pág 43
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    //javascript oferece o geter com essa sintaxe que possibilita acessarmos a propriedade "normalmente"
    //ex: n1.quantidade, porém se tentarmos alterá-la atribuindo um novo valor o comonado será ignorado,
    //n1.quantidade = 1000 não seria executado.

    get data() {
        return new Date(this._data.getTime());
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

