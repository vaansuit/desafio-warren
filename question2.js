/* Para rodar o programa, basta abrir o terminal e digitar $ node question2.js > resultado2.txt
    o Node ira gerar um arquivo de nome resultado2.txt com a resposta*/

var tempo = [-1, -2, 0, 1, 2] //colocar o tempo de chegada de cada aluno em ordem crescente
var limiteAlunos = tempo[0]; //colocar o limite de alunos desejado dentro dos parenteses

if (limiteAlunos <= 0) {
    console.log('Vai ter aula')
} else {
    console.log('Não vai ter aula')
}


