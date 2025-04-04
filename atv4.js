function ordenarDoisNumeros(arr) {
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}

function ordenarTresNumeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function inverterArray() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt("Digite um número:")));
    }
    alert("Array original: " + numeros);
    alert("Array invertido: " + numeros.reverse());
}

function inverterArrayDinamico() {
    let qtd = parseInt(prompt("Quantos números deseja inserir?"));
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        numeros.push(parseInt(prompt("Digite um número:")));
    }
    alert("Array original: " + numeros);
    alert("Array invertido: " + numeros.reverse());
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function encontrarIndices(arr, num) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            indices.push(i);
        }
    }
    return indices;
}

function fibonacciArray() {
    let n = parseInt(prompt("Digite um número inteiro positivo:"));
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    alert("Sequência de Fibonacci: " + fib);
}

function fatorialArray() {
    let n = parseInt(prompt("Digite um número inteiro positivo:"));
    let fat = [1];
    for (let i = 1; i <= n; i++) {
        fat.push(fat[i - 1] * i);
    }
    alert("Fatoriais: " + fat);
}

function jogoDaVelha() {
    let tabuleiro = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    let jogador = "X";
    for (let i = 0; i < 9; i++) {
        let linha = parseInt(prompt("Digite a linha (0 a 2):"));
        let coluna = parseInt(prompt("Digite a coluna (0 a 2):"));
        if (tabuleiro[linha][coluna] === "") {
            tabuleiro[linha][coluna] = jogador;
            jogador = jogador === "X" ? "O" : "X";
        }
        console.table(tabuleiro);
    }
}

function criarMatriz() {
    let linhas = parseInt(prompt("Digite o número de linhas:"));
    let colunas = parseInt(prompt("Digite o número de colunas:"));
    let matriz = [];
    let valor = 1;
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = valor++;
        }
    }
    console.table(matriz);
}
