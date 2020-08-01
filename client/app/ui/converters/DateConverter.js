class DateConverter {

    constructor () {
        throw new Error('Esta classe não deve ser instanciada!');
        
    }

    //getDate() retorna o dia do mês, getMonth() retorna o mês e getFullYear() retorna o ano com 4 digitos
    static paraTexto (data) {

        
        return (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);

    }

    static paraData (texto) {

        //condição para testar se a data está no formato correto adotando o conceito de fail fast
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

        //fazemos uso aqui do "spread operator - ..." que permite passar um array como argumento
        //e os elementos do array serão considerados na ordem.
        return new Date(...texto
                .split('-')
                .map((item, indice) => item - indice % 2))

    }
}