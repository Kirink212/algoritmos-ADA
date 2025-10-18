// INSERTION SORT - Versão Simples para Apresentação

/**
 * Algoritmo Insertion Sort
 * Ordena um array inserindo cada elemento na posição correta
 */
function insertionSort(arr) {
    //console.log('Array original:', arr);
    
    for (let i = 1; i < arr.length; i++) {
        let elementoAtual = arr[i];
        let j = i - 1;
        
        // Move elementos maiores para a direita
        while (j >= 0 && arr[j] > elementoAtual) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insere o elemento na posição correta
        arr[j + 1] = elementoAtual;
        
        //console.log(`Passo ${i}:`, [...arr]);
    }
    
    return arr;
}

// Exemplo prático
console.log('=== INSERTION SORT ===\n');

const numeros = [5, 2, 8, 1, 9, 3];

console.log('\n✅ Resultado inicial:', numeros);
const resultado = insertionSort([...numeros]); // Cópia para não alterar o original


console.log('\n✅ Resultado final:', resultado);

// Demonstração com diferentes tipos de dados
console.log('\n=== OUTROS EXEMPLOS ===\n');

// Array pequeno
console.log('Array pequeno:');
insertionSort([3, 1, 4]);

console.log('\nArray já ordenado:');
insertionSort([1, 2, 3, 4]);

console.log('\nArray com repetições:');
insertionSort([4, 2, 4, 1, 3]); 