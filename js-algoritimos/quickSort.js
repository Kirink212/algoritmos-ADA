// QUICK SORT SIMPLES

function quickSort(arr) {
    // Caso base: array com 1 elemento ou vazio
    if (arr.length <= 1) {
        return arr;
    }
    
    // Escolhe o pivô (último elemento)
    const pivo = arr[arr.length - 1];
    const menores = [];
    const maiores = [];
    
    // Divide os elementos em relação ao pivô
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivo) {
            menores.push(arr[i]);
        } else {
            maiores.push(arr[i]);
        }
    }
    
    // Recursivamente ordena e combina
    return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

// Teste
console.log('Original: [64, 34, 25, 12, 22, 11, 90]');
const resultado = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log('Ordenado:', resultado); 