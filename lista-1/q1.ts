/* Collection Array (Resolva 1 Exercício)
    Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
        ● Mostre na tela todas as cores adicionadas.
        ● Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import leia = require('readline-sync');

let listaCores: Array<string> = new Array<string>();
let cor;

// Adicioando cor na lista de cores
for (let i = 0; i < 5; i++){
    cor = leia.question(`Digite a cor ${i + 1}: `);
    listaCores.push(cor);
}

console.log('Listar todas as cores: ');
for (let cor of listaCores){
    console.log(cor);
}

listaCores.sort();

console.log('\nOrdenar as cores: ');
for (let cor of listaCores){
    console.log(cor);
}