class NegociacaoController {

    constructor () {
        //artifício para deixar o código mais enxuto
        //não é Jquery, somente uma "homenagem".
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoes");
        this._negociacoesView.update(this._negociacoes);
    }
    
    
    
    
    adiciona(event) {       

        //Para prevenir comportamento padrão e ser possível ler após o preenchimento e envio do form
        event.preventDefault();   
        
        //inclui a negociacao na lista Negociacoes
        this._negociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._negociacoes);
        
        this._limpaFormulario();

    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

}