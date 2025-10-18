// SELECTION SORT SIMPLES

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let menorIndice = i;
        
        // Encontra o menor elemento
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[menorIndice]) {
                menorIndice = j;
            }
        }
        
        // Troca os elementos
        if (menorIndice !== i) {
            let temp = arr[i];
            arr[i] = arr[menorIndice];
            arr[menorIndice] = temp;
        }
    }
    return arr;
}

// Teste
console.log('Original: [64, 25, 12, 22, 11]');
const resultado = selectionSort([64, 25, 12, 22, 11]);
console.log('Ordenado:', resultado); 