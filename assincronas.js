let nota;
do {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
} while (isNaN(nota) || nota < 0 || nota > 10);

let usuario, senha;
do {
    usuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");
} while (usuario === senha);

let nome;
do {
    nome = prompt("Digite seu nome:");
} while (nome.length <= 3);

let idade;
do {
    idade = parseInt(prompt("Digite sua idade:"));
} while (isNaN(idade) || idade < 0 || idade > 150);

let salario;
do {
    salario = parseFloat(prompt("Digite seu salário:"));
} while (isNaN(salario) || salario <= 0);

let sexo;
do {
    sexo = prompt("Digite seu sexo (f/m):").toLowerCase();
} while (sexo !== 'f' && sexo !== 'm');

let estadoCivil;
do {
    estadoCivil = prompt("Digite seu estado civil (s/c/v/d):").toLowerCase();
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

let populacaoA = 80000, populacaoB = 200000, anos = 0;
while (populacaoA < populacaoB) {
    populacaoA += populacaoA * 0.03;
    populacaoB += populacaoB * 0.015;
    anos++;
}
console.log(anos);

let n1 = parseInt(prompt("Digite um número:"));
let n2 = parseInt(prompt("Digite outro número:"));
for (let i = Math.min(n1, n2) + 1; i < Math.max(n1, n2); i++) {
    console.log(i);
}

let soma = 0;
for (let i = Math.min(n1, n2) + 1; i < Math.max(n1, n2); i++) {
    soma += i;
}
console.log(soma);

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
}

let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}
console.log(resultado);

let pares = 0, impares = 0;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número:"));
    num % 2 === 0 ? pares++ : impares++;
}
console.log(pares, impares);

let fibonacci = [1, 1];
let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(fibonacci);

let fib = [0, 1];
while (true) {
    let next = fib[fib.length - 1] + fib[fib.length - 2];
    if (next > 500) break;
    fib.push(next);
}
console.log(fib);

let numFatorial = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = numFatorial; i > 1; i--) {
    fatorial *= i;
}
console.log(fatorial);

let valores = [];
let qtd = parseInt(prompt("Quantos números deseja inserir?"));
for (let i = 0; i < qtd; i++) {
    valores.push(parseInt(prompt("Digite um número:")));
}
console.log(Math.min(...valores), Math.max(...valores), valores.reduce((a, b) => a + b, 0));

let valoresValidos = [];
for (let i = 0; i < qtd; i++) {
    let num;
    do {
        num = parseInt(prompt("Digite um número entre 0 e 1000:"));
    } while (num < 0 || num > 1000);
    valoresValidos.push(num);
}
console.log(Math.min(...valoresValidos), Math.max(...valoresValidos), valoresValidos.reduce((a, b) => a + b, 0));
