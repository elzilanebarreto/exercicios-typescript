/* Collection Set:
    Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
        ● Mostre na tela todos os elementos da Collection Set.
*/

import leia = require('readline-sync');

let valoresInteiros: Set<number> = new Set<number>();
let numero: number;

for(let i = 0; i < 10; i++){
    numero = leia.questionInt(`Digite o valor ${i + 1}.: `);
    valoresInteiros.add(numero);
}

console.log('Set não ordenado: ');
for(let valor of valoresInteiros){
    console.log(valor);
}

let ordenarSet = Array.from(valoresInteiros); // Convertendo um Set para um Array
ordenarSet.sort(function(a, b) {return a - b;}); // Função para ordenar de forma crescente os valores

console.log('Listar dados do Set ordenados: ');
for(let valor of ordenarSet){
    console.log(valor);
}

