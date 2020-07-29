class NegociacaoController {

    constructor () {
        //artifício para deixar o código mais enxuto
        //não é Jquery, somente uma "homenagem".
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    
    
    adiciona(event) {       

        //Para prevenir comportamento padrão e ser possível ler após o preenchimento e envio do form
        event.preventDefault();
        
        //instancia um objeto de dateConverter para tratar a data
        // let converter = new DateConverter();

        //converte o string recebido do formulário, capturado pelo controller, para data
        let data = DateConverter.paraData(this._inputData.value);
        console.log(data);

        //instacia uma negociação
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        
        let diaMesAno = DateConverter.paraTexto(negociacao.data);

        console.log(diaMesAno);
        console.log(negociacao);

    }
}