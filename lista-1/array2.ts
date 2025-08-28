/*Escreva um programa para criar uma Collection Array do tipo number, inicializada
com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via
teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição
deste número na Collection. Caso o número não seja encontrado, o programa
deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import leia = require('readline-sync');

let listaNumeros: Array<number> = new Array<number>();
let numero: number, procurandoNumero: number;

for(let i = 0; i < 10; i++){
    numero = leia.questionInt('Informe o numero inteiro: ');
    listaNumeros.push(numero);
}

procurandoNumero = leia.questionInt('Digite o numero que voce deseja encontrar: ');


if(listaNumeros.includes(procurandoNumero)){
    console.log(`O numero ${procurandoNumero} esta localizado na posicao: ${listaNumeros.indexOf(procurandoNumero)}`);
} else{
    console.log(`O numero ${procurandoNumero} nao foi encontrado!`);
}
