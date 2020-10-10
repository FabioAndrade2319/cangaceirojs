//o arquivo app.js servirá como ponto de entrada da aplicação,
//onde serão inicializados todos os objetos necessários.

//cria uma instância de controler
const controller = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));


