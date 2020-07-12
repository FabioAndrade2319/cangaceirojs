class NegociacaoController {

    adiciona(event) {
        event.preventDefault();

        alert('Chamei ação no controller');

        //artifício para deixar o código mais enxuto
        //não é Jquery, somente uma "homenagem".
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));



    }
}