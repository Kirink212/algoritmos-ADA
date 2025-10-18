// MERGE SORT SIMPLES

function mergeSort(arr) {
    // Caso base: array com 1 elemento ou vazio
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide o array ao meio
    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);
    
    // Recursivamente ordena cada metade e depois combina
    return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda, direita) {
    let resultado = [];
    let i = 0, j = 0;
    
    // Combina os arrays ordenados
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] <= direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }
    
    // Adiciona elementos restantes
    while (i < esquerda.length) {
        resultado.push(esquerda[i]);
        i++;
    }
    
    while (j < direita.length) {
        resultado.push(direita[j]);
        j++;
    }
    
    return resultado;
}

// Teste
console.log('Original: [38, 27, 43, 3, 9, 82, 10]');
const resultado = mergeSort([38, 27, 43, 3, 9, 82, 10]);
console.log('Ordenado:', resultado); 