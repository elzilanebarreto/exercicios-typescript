/* Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import questionInt = require('readline-sync');
import leia = require('readline-sync');

let valoresInteiro: Set<number> = new Set<number>();
let valor, procurandoValor, situacao;

for(let i = 0; i < 10; i++){
    valor = leia.questionInt('Digite o numero: ');
    valoresInteiro.add(valor);
}

console.clear();

procurandoValor = leia.questionInt('Digite o numero que voce deseja encontrar: ');

if (valoresInteiro.has(procurandoValor)) {
    situacao = 'foi';
} else {
    situacao = 'nao foi';
}

console.log(`O numero ${procurandoValor} ${situacao} encontrado!`);