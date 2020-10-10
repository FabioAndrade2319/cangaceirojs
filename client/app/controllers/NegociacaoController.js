class NegociacaoController {

    constructor () {
        //artifício para deixar o código mais enxuto
        //não é Jquery, somente uma "homenagem".
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes(); //instancia um array de negociacoes
        this._negociacoesView = new NegociacoesView("#negociacoes"); //instancia uma view passando o seletor da div de index.html
        this._negociacoesView.update(this._negociacoes); 
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView("#mensagemView");
        this._mensagemView.update(this._mensagem);
    }
    
    
    
    
    adiciona(event) {       

        //Para prevenir comportamento padrão e ser possível ler após o preenchimento e envio do form
        event.preventDefault();   
        
        //inclui a negociacao na lista Negociacoes
        this._negociacoes.adiciona(this._criaNegociacao());
        //inclui uma mensagem de sucesso na inclusão
        this._mensagem.texto = "Negociação adicionada com sucesso";
        //atualiza a view 
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
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

    apaga() {
        this._negociacoes.esvazia();
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = "Negociações apagadas com sucesso!";
        this._mensagemView.update(this._mensagem);
    }

}