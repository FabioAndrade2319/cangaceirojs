class DateConverter {

    constructor () {
        throw new Error('Esta classe não deve ser instanciada!');
        
    }

    //getDate() retorna o dia do mês, getMonth() retorna o mês e getFullYear() retorna o ano com 4 digitos
    static paraTexto (data) {
        return (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);

    }

    static paraData (texto) {
        //fazemos uso aqui do "spread operator - ..." que permite passar um array como argumento
        //e os elementos do array serão considerados na ordem.
        return new Date(...texto
                .split('-')
                .map((item, indice) => item - indice % 2))

    }
}