class Negociacao {

    //Javascript ainda não proporciona restrição de acesso em OO então utilizamos a convenção
    //do underline para deixar claro que as propriedades não devem ser acessadas diretamente.

    
    constructor(_data, _quantidade, _valor) {
        //alterado novamente conforme tópico 2.11 do livro fazendo uso do Object.assign
        Object.assign(this,{_quantidade,_valor});
        this._data = new Date(_data.getTime());
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

