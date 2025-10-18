// FILA DE PRIORIDADE SIMPLES

class FilaPrioridade {
    constructor() {
        this.heap = [];
    }
    
    // Adiciona elemento com prioridade
    inserir(elemento, prioridade) {
        const no = { elemento, prioridade };
        this.heap.push(no);
        this.subirHeap(this.heap.length - 1);
        console.log(`Inserido: ${elemento} (prioridade ${prioridade})`);
        this.mostrar();
    }
    
    // Remove elemento com maior prioridade
    remover() {
        if (this.heap.length === 0) {
            console.log('Fila vazia!');
            return null;
        }
        
        const maior = this.heap[0];
        const ultimo = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = ultimo;
            this.descerHeap(0);
        }
        
        console.log(`Removido: ${maior.elemento} (prioridade ${maior.prioridade})`);
        this.mostrar();
        return maior.elemento;
    }
    
    // Verifica se está vazia
    vazia() {
        return this.heap.length === 0;
    }
    
    // Mostra o primeiro da fila
    primeiro() {
        return this.heap.length > 0 ? this.heap[0].elemento : null;
    }
    
    // Sobe elemento no heap
    subirHeap(indice) {
        while (indice > 0) {
            const paiIndice = Math.floor((indice - 1) / 2);
            
            if (this.heap[indice].prioridade <= this.heap[paiIndice].prioridade) {
                break;
            }
            
            [this.heap[indice], this.heap[paiIndice]] = [this.heap[paiIndice], this.heap[indice]];
            indice = paiIndice;
        }
    }
    
    // Desce elemento no heap
    descerHeap(indice) {
        while (true) {
            let maior = indice;
            const esquerda = 2 * indice + 1;
            const direita = 2 * indice + 2;
            
            if (esquerda < this.heap.length && 
                this.heap[esquerda].prioridade > this.heap[maior].prioridade) {
                maior = esquerda;
            }
            
            if (direita < this.heap.length && 
                this.heap[direita].prioridade > this.heap[maior].prioridade) {
                maior = direita;
            }
            
            if (maior === indice) break;
            
            [this.heap[indice], this.heap[maior]] = [this.heap[maior], this.heap[indice]];
            indice = maior;
        }
    }
    
    // Mostra a fila atual
    mostrar() {
        if (this.heap.length === 0) {
            console.log('Fila: []');
        } else {
            const elementos = this.heap.map(no => `${no.elemento}(${no.prioridade})`);
            console.log(`Fila: [${elementos.join(', ')}]`);
        }
        console.log();
    }
}

// Demonstração
console.log('=== FILA DE PRIORIDADE ===\n');

const fila = new FilaPrioridade();

// Inserindo elementos
fila.inserir('Baixa', 1);
fila.inserir('Alta', 5);
fila.inserir('Média', 3);
fila.inserir('Urgente', 10);
fila.inserir('Normal', 2);

console.log('--- Removendo elementos ---\n');

// Removendo por prioridade
while (!fila.vazia()) {
    fila.remover();
} 