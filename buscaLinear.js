// Busca Linear


function buscaLinear(array, elemntoBuscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemntoBuscado) {
            return i;
        }
    }
    return -1;
}

// O array começa na casa 0
const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const elementoEncontrado = buscaLinear(array, elementoProcurado);

if(elementoEncontrado !== -1){
    console.log(`O elemento ${elementoProcurado} foi encontrado na casa: ${elementoEncontrado}`)
}else{
    console.log(`O elemento ${elementoProcurado} não foi encontrado na lista: `)
}
