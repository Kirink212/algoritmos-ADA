// HEAP SORT SIMPLES

function heapSort(arr) {
    const n = arr.length;
    
    // Constrói o heap máximo
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extrai elementos do heap um por um
    for (let i = n - 1; i > 0; i--) {
        // Move a raiz atual para o final
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // Chama heapify no heap reduzido
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let maior = i; // Inicializa maior como raiz
    let esquerda = 2 * i + 1; // Filho esquerdo
    let direita = 2 * i + 2; // Filho direito
    
    // Se filho da esquerda é maior que a raiz
    if (esquerda < n && arr[esquerda] > arr[maior]) {
        maior = esquerda;
    }
    
    // Se filho da direita é maior que o maior até agora
    if (direita < n && arr[direita] > arr[maior]) {
        maior = direita;
    }
    
    // Se maior não é raiz
    if (maior !== i) {
        [arr[i], arr[maior]] = [arr[maior], arr[i]]; // Troca
        
        // Recursivamente heapify a subárvore afetada
        heapify(arr, n, maior);
    }
}

// Teste
console.log('Original: [12, 11, 13, 5, 6, 7]');
const resultado = heapSort([12, 11, 13, 5, 6, 7]);
console.log('Ordenado:', resultado); 