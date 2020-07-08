//cria o array campos para capturar o preenchimento
//utiliza querySelector por ID
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];

//captura o corpo da tabela especificando o elemento table + elemento filho tbody
var tbody = document.querySelector('table tbody');


//adiciona EventListener no evento 'submit'
document.querySelector('.form').addEventListener('submit', function(event){

    //necessário para conseguirmos visualizar a adição pois do contrário
    //o submit faria com que a página voltasse ao estado original.
    event.preventDefault();

    //cria a variável para a linha da tabela
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        //cria uma td(campo de dados) para cada campo da linha a ser inserida na tabela
        var td = document.createElement('td');

        //atribui o valor do campo à td
        td.textContent = campo.value;

        //adiciona o campo de dado criado à linha
        tr.appendChild(td);
    })

    //cria um campo para o volume da transação e o adiciona ao final da linha
    var tdvolume = document.createElement('td');
    tdvolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdvolume);

    //adiciona a linha ao corpo da tabela
    tbody.appendChild(tr);

    //limpa os campos do formulário e move o foco para a data para nova digitação
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();

});





