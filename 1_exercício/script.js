// Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos

let numeros = [-1, -2, -3, 1, 2, 3];

function numPositivo(n) {
  if (n >= 0) return n;
}

let exibirNumPositivo = numeros.filter(numPositivo);
console.log(exibirNumPositivo);
