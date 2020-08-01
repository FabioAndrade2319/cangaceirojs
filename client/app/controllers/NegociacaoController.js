class NegociacaoController {

    constructor () {
        //artifício para deixar o código mais enxuto
        //não é Jquery, somente uma "homenagem".
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }
    
    
    
    adiciona(event) {       

        //Para prevenir comportamento padrão e ser possível ler após o preenchimento e envio do form
        event.preventDefault();   

        //instacia uma negociação
        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        //inclui a negociacao na lista Negociacoes
        this._negociacoes.adiciona(negociacao);
        
        console.log(this._negociacoes.paraArray());

    }
}